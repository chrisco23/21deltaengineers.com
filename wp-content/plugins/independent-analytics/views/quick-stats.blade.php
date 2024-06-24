@php /** @var \IAWP\Plugin_Group[] $plugin_groups */ @endphp
@php /** @var \IAWP\Quick_Stat[] $quick_stats */ @endphp
@php /** @var bool $is_dashboard_widget */ @endphp

<div id="quick-stats" data-controller="quick-stats" class="{{ esc_attr($quick_stats_html_class) }}">
    @if(!$is_dashboard_widget)
        @include('plugin-group-options', [
            'option_type' => 'quick_stats',
            'option_name' => __('Toggle Stats', 'independent-analytics'),
            'option_icon' => 'visibility',
            'plugin_groups' => $plugin_groups,
            'options' => $quick_stats
        ])
    @endif

    {{-- Quick stats --}}
    <div class="stats">
        @foreach($quick_stats as $quick_stat)
            @if($is_dashboard_widget && !$quick_stat->is_visible_in_dashboard_widget())
                @continue
            @endif

            @if(!$quick_stat->is_enabled())
                @continue
            @endif

            <div class="stat {{ $quick_stat->id() }} {{ $quick_stat->is_visible() ? 'visible' : ''}}" data-id="{{ $quick_stat->id() }}" data-quick-stats-target="quickStat">
                <div class="metric">
                    <span class="metric-name">{{ $quick_stat->name() }}</span>
                    @if(!is_null($quick_stat->icon()))
                        <span class="plugin-label">{!! iawp_icon($quick_stat->icon()) !!}</span>
                    @endif
                </div>
                <div class="values">
                    <span class="count"
                          test-value="{{ esc_attr(strip_tags($quick_stat->total())) }}">
                        {!! wp_kses($quick_stat->total(), ['span' => []]) !!}
                        @if($quick_stat->unfiltered_total())
                            <span class="unfiltered"> / {!! wp_kses($quick_stat->unfiltered_total(), ['span' => []]) !!}</span>
                        @endif
                    </span>
                </div>
                <span class="growth">
                    <span class="percentage {{ esc_attr($quick_stat->growth_html_class()) }}"
                          test-value="{{ esc_attr($quick_stat->unformatted_growth()) }}">
                        <span class="dashicons dashicons-arrow-up-alt growth-arrow"></span>
                            {{ $quick_stat->growth() }}
                        </span>
                    <span class="period-label">{{ __('vs. previous period', 'independent-analytics') }}</span>
                </span>
            </div>
        @endforeach
    </div>
</div>