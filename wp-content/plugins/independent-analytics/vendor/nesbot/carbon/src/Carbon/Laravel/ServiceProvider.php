<?php

/**
 * This file is part of the Carbon package.
 *
 * (c) Brian Nesbitt <brian@nesbot.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace IAWP_SCOPED\Carbon\Laravel;

use IAWP_SCOPED\Carbon\Carbon;
use IAWP_SCOPED\Carbon\CarbonImmutable;
use IAWP_SCOPED\Carbon\CarbonInterval;
use IAWP_SCOPED\Carbon\CarbonPeriod;
use IAWP_SCOPED\Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use IAWP_SCOPED\Illuminate\Events\Dispatcher;
use IAWP_SCOPED\Illuminate\Events\EventDispatcher;
use IAWP_SCOPED\Illuminate\Support\Carbon as IlluminateCarbon;
use IAWP_SCOPED\Illuminate\Support\Facades\Date;
use Throwable;
/** @internal */
class ServiceProvider extends \IAWP_SCOPED\Illuminate\Support\ServiceProvider
{
    /** @var callable|null */
    protected $appGetter = null;
    /** @var callable|null */
    protected $localeGetter = null;
    public function setAppGetter(?callable $appGetter) : void
    {
        $this->appGetter = $appGetter;
    }
    public function setLocaleGetter(?callable $localeGetter) : void
    {
        $this->localeGetter = $localeGetter;
    }
    public function boot()
    {
        $this->updateLocale();
        if (!$this->app->bound('events')) {
            return;
        }
        $service = $this;
        $events = $this->app['events'];
        if ($this->isEventDispatcher($events)) {
            $events->listen(\class_exists('IAWP_SCOPED\\Illuminate\\Foundation\\Events\\LocaleUpdated') ? 'Illuminate\\Foundation\\Events\\LocaleUpdated' : 'locale.changed', function () use($service) {
                $service->updateLocale();
            });
        }
    }
    public function updateLocale()
    {
        $locale = $this->getLocale();
        if ($locale === null) {
            return;
        }
        Carbon::setLocale($locale);
        CarbonImmutable::setLocale($locale);
        CarbonPeriod::setLocale($locale);
        CarbonInterval::setLocale($locale);
        if (\class_exists(IlluminateCarbon::class)) {
            IlluminateCarbon::setLocale($locale);
        }
        if (\class_exists(Date::class)) {
            try {
                $root = Date::getFacadeRoot();
                $root->setLocale($locale);
            } catch (Throwable $e) {
                // Non Carbon class in use in Date facade
            }
        }
    }
    public function register()
    {
        // Needed for Laravel < 5.3 compatibility
    }
    protected function getLocale()
    {
        if ($this->localeGetter) {
            return ($this->localeGetter)();
        }
        $app = $this->getApp();
        $app = $app && \method_exists($app, 'getLocale') ? $app : $this->getGlobalApp('translator');
        return $app ? $app->getLocale() : null;
    }
    protected function getApp()
    {
        if ($this->appGetter) {
            return ($this->appGetter)();
        }
        return $this->app ?? $this->getGlobalApp();
    }
    protected function getGlobalApp(...$args)
    {
        return \function_exists('IAWP_SCOPED\\app') ? \IAWP_SCOPED\app(...$args) : null;
    }
    protected function isEventDispatcher($instance)
    {
        return $instance instanceof EventDispatcher || $instance instanceof Dispatcher || $instance instanceof DispatcherContract;
    }
}
