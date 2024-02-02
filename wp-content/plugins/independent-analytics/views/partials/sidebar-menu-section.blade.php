@php /** @var \IAWP\Report|null $favorite_report */ @endphp
@php /** @var bool $current */ @endphp
@php /** @var string $report_name */ @endphp
@php /** @var string $slug */ @endphp
@php /** @var bool $can_edit_settings */ @endphp
@php /** @var bool $has_reports */ @endphp
@php /** @var bool $external */ @endphp
@php /** @var bool $upgrade */ @endphp
@php /** @var array $reports */ @endphp

<?php 
    $is_favorite = $favorite_report == null ? false : $has_reports && !$favorite_report->is_saved_report() && $favorite_report->type() === $slug;
?>
<div class="menu-section {{$slug}} {{$current ? 'current' : ''}} {{$reports == null ? 'no-sub-items' : ''}} {{$upgrade ? 'upgrade' : ''}} {{$external ? 'external' : ''}}">
    <span class="collapsed-icon" data-testid="collapsed-icon-<?php esc_attr_e($slug); ?>">
        <?php echo iawp_blade()->run('icons.' . $slug); ?>
    </span>
    <div class="report-inner">
        <h3 class="report-name {{ $is_favorite ? 'favorite' : '' }}" data-report-type="{{$slug}}">
            <span class="icon-container">
                <span class="report-icon">
                    <?php echo iawp_blade()->run('icons.' . $slug); ?>
                </span>
            </span>
            <a href="<?php esc_attr_e($url) ?>" data-testid="menu-link-<?php esc_attr_e($slug); ?>"><?php echo wp_kses_post($report_name); ?>
                @if($external || $upgrade)
                    <span class="dashicons dashicons-external"></span>
                @endif
            </a>
            @if($upgrade)
                <span class="pro-label">Pro</span>
            @endif
            @if($has_reports && $can_edit_settings)
                <button class="add-new-report" data-controller="create-report"
                        data-action="create-report#create"
                        data-create-report-type-value="<?php esc_attr_e($slug); ?>"
                        data-testid="add-new-report-<?php esc_attr_e($slug); ?>"><span
                            class="dashicons dashicons-plus-alt2"></span></button>
            @endif
        </h3>
        @if($reports != null)
            <ol data-controller="{{ $can_edit_settings ? "sortable-reports" : "" }}"
                data-sortable-reports-type-value="<?php esc_attr_e($slug); ?>">
                @foreach($reports as $report)
                    <li data-report-id="{{$report->id()}}"
                        class="{{$report->is_current() ? 'current' : ''}} {{$report->is_favorite() ? 'favorite' : '' }}">
                        <a href="{{$report->url()}}"
                            data-name-for-report-id="{{$report->id()}}"
                            data-testid="menu-link-<?php esc_attr_e(sanitize_title($report->name())); ?>">{{$report->name()}}</a>
                    </li>
                @endforeach
            </ol>
        @endif
    </div>
    <a class="overlay-link" href="<?php esc_attr_e($url); ?>" <?php echo $external ? 'target="_blank"' : '' ?>></a>
    @if($collapsed_label)
        <span class="collapsed-label">
            <a href="<?php esc_attr_e($url); ?>" <?php echo $external ? 'target="_blank"' : ''; ?>>
                <?php echo $collapsed_label; echo $external ? '<span class="dashicons dashicons-external"></span>' : ''; ?>
            </a>
        </span>
    @endif
</div>