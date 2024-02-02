<?php

namespace IAWP_SCOPED\IAWP;

/** @internal */
class Interrupt
{
    private $template;
    private $exclude_page_creation;
    public function __construct(string $template, bool $exclude_page_creation = \true)
    {
        $this->template = $template;
        $this->exclude_page_creation = $exclude_page_creation;
    }
    public function render(?array $options = null) : void
    {
        if ($this->exclude_page_creation) {
            $this->render_page($options);
            return;
        }
        if ($this->is_admin_page()) {
            \add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        }
        \add_action('admin_menu', function () use($options) {
            $title = Capability_Manager::white_labeled() ? \esc_html__('Analytics', 'independent-analytics') : 'Independent Analytics';
            \add_menu_page($title, \esc_html__('Analytics', 'independent-analytics'), Capability_Manager::can_view_string(), 'independent-analytics', function () use($options) {
                $this->render_page($options);
            }, 'dashicons-analytics', 3);
        });
    }
    public function enqueue_styles()
    {
        \wp_register_style('iawp-style', \IAWP_SCOPED\iawp_url_to('dist/styles/style.css'), [], \IAWP_VERSION);
        \wp_enqueue_style('iawp-style');
    }
    private function is_admin_page() : bool
    {
        $page = $_GET['page'] ?? null;
        return \is_admin() && $page === 'independent-analytics';
    }
    private function render_page(?array $options) : void
    {
        if (\is_null($options)) {
            $options = [];
        }
        ?>
        <div id="iawp-parent" class="iawp-parent">
            <?php 
        echo \IAWP_SCOPED\iawp_blade()->run('partials.interrupt-header');
        ?>
            <?php 
        echo \IAWP_SCOPED\iawp_blade()->run($this->template, $options);
        ?>
        </div>
        <?php 
    }
}
