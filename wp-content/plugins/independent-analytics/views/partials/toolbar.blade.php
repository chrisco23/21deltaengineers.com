@php /** @var \IAWP\Env $env */ @endphp

<nav class="nav">
    <ul class="menu" data-testid="menu">
        <li class="menu-item">
            <a href="?page=independent-analytics"
               data-testid="menu-link-views"
               class="menu-link link-dark {{$env->get_tab_class_for('views')}}">
                {{ __('Pages', 'independent-analytics') }}
            </a>
        </li>
        <li class="menu-item">
            <a href="?page=independent-analytics&tab=referrers"
               data-testid="menu-link-referrers"
               class="menu-link link-dark {{$env->get_tab_class_for('referrers')}}">
                {{ __('Referrers', 'independent-analytics') }}
            </a>
        </li>
        <li class="menu-item">
            <a href="?page=independent-analytics&tab=geo"
               data-testid="menu-link-geo"
               class="menu-link link-dark {{$env->get_tab_class_for('geo')}}">
                {{ __('Geographic', 'independent-analytics') }}
            </a>
        </li>
        <li class="menu-item">
            <a href="?page=independent-analytics&tab=devices"
               data-testid="menu-link-devices"
               class="menu-link link-dark {{$env->get_tab_class_for('devices')}}">
                {{ __('Devices', 'independent-analytics') }}
            </a>
        </li>
        @if($env->is_pro())
            <li class="menu-item">
                <a href="?page=independent-analytics&tab=campaigns"
                   data-testid="menu-link-campaigns"
                   class="menu-link link-dark {{$env->get_tab_class_for('campaigns', 'campaign-builder')}}">
                    {{ __('Campaigns', 'independent-analytics') }}
                </a>
                <div class="sub-menu">
                    <ul>
                        <li class="menu-item">
                            <a href="?page=independent-analytics&tab=campaign-builder"
                               class="menu-link link-dark">
                                {{ __('Campaign Builder', 'independent-analytics') }}
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="menu-item">
                <a href="?page=independent-analytics&tab=real-time"
                   data-testid="menu-link-real-time"
                   class="menu-link link-dark {{$env->get_tab_class_for('real-time')}}">
                    {{ __('Real-time', 'independent-analytics') }}
                </a>
            </li>
        @endif
        @if($env->can_write())
            <li class="menu-item">
                <a href="?page=independent-analytics&tab=settings"
                   data-testid="menu-link-settings"
                   class="menu-link link-dark {{$env->get_tab_class_for('settings')}}">
                    {{ __('Settings', 'independent-analytics') }}
                </a>
            </li>
        @endif
        @if(!$env->is_white_labeled())
            <li class="menu-item">
                <a href="?page=independent-analytics&tab=learn"
                   data-testid="menu-link-learn"
                   class="menu-link link-dark {{$env->get_tab_class_for('learn')}}">
                    {{ __('Learn', 'independent-analytics') }}
                </a>
            </li>
        @endif
        @if($env->is_free() && ! $env->is_white_labeled())
            <li class="menu-item upgrade first campaigns" data-controller="modal">
                <a href="#"
                   data-testid="menu-link-campaigns"
                   data-action="modal#toggleModal"
                   data-modal-target="modalButton"
                   class="menu-link link-dark">
                    {{ __('Campaigns', 'independent-analytics') }}
                </a>
                <div class="upgrade-popup" data-modal-target="modal">
                    <div class="title">
                        <span class="name">
                            {{ __('Campaigns', 'independent-analytics') }}
                        </span>
                        <span class="iawp-label">
                            {{ __('PRO', 'independent-analytics') }}
                        </span>
                    </div>
                    <div class="description">
                        <p>
                            {{ __('Campaigns let you track visits from individual links you share online, whether that is a Tweet, ad, or guest post.', 'independent-analytics') }}
                        </p>
                        <a class="iawp-button purple" target="_blank"
                           href="https://independentwp.com/features/campaigns/?utm_source=User+Dashboard&utm_medium=WP+Admin&utm_campaign=Campaigns+menu+item&utm_content=Menu+item">
                            {{ __('Learn more', 'independent-analytics') }}
                        </a>
                    </div>
                </div>
            </li>
            <li class="menu-item upgrade real-time" data-controller="modal">
                <a href="#"
                   data-testid="menu-link-real-time"
                   data-action="modal#toggleModal"
                   data-modal-target="modalButton"
                   class="menu-link link-dark">
                    {{ __('Real-time', 'independent-analytics') }}
                </a>
                <div class="upgrade-popup" data-modal-target="modal">
                    <div class="title">
                        <span class="name">
                            {{ __('Real-time analytics', 'independent-analytics') }}
                        </span>
                        <span class="iawp-label">
                            {{ __('PRO', 'independent-analytics') }}
                        </span>
                    </div>
                    <div class="description">
                        <p>
                            {{ __('Real-time analytics let you see how many people are on your site right now, what pages they are viewing, and where they came from.', 'independent-analytics') }}
                        </p>
                        <a class="iawp-button purple" target="_blank"
                           href="https://independentwp.com/features/real-time/?utm_source=User+Dashboard&utm_medium=WP+Admin&utm_campaign=Real-time+menu+item&utm_content=Menu+item">
                            {{ __('Learn more', 'independent-analytics') }}
                        </a>
                    </div>
                </div>
            </li>
        @endif
    </ul>
</nav>