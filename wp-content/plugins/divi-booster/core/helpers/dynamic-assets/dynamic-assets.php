<?php // Manages loading of Divi's dynamic assets (CSS and JS)

DBDB_Divi_Dynamic_Asset_Group::create(
    'magnific-popup', 
    array(
        'dbdb-magnific-popup' => '/includes/builder/feature/dynamic-assets/assets/css/magnific_popup.css'
    ), 
    array(
        'dbdb-magnific-popup' => '/includes/builder/feature/dynamic-assets/assets/js/magnific-popup.js'
    )
)->register();


DBDB_Divi_Dynamic_Asset_Group::create(
    'social-media-follow', 
    array(
        'dbdb-social-media-follow' => '/includes/builder/feature/dynamic-assets/assets/css/social_media_follow.css'
    ),
    array()
)->register();

add_filter('et_global_assets_list', 'dbdb_dynamic_assets_load_secondary_nav_assets');

function dbdb_dynamic_assets_load_secondary_nav_assets($assets_list) {
    if (is_array($assets_list)) {
        if (empty($assets_list['et_divi_secondary_nav']) && apply_filters('dbdb-load-secondary-nav-assets', false)) { 
            $assets_list['et_divi_secondary_nav'] = array(
                'css' => get_template_directory().'/css/dynamic-assets/secondary_nav.css',
            );
        }
    }
    return $assets_list;
}

class DBDB_Divi_Dynamic_Asset_Group {

    private $group;
    private $css;
    private $js;
    private $divi;

    static function create($group, $css, $js) {
        return new self($group, $css, $js);
    }

    public function __construct($group, $css, $js) {
        $this->group = $group;
        $this->css = $css;
        $this->js = $js;
        $this->divi = DBDBDivi::create();
    }

    public function register() {
        add_action('et_builder_ready', array($this, 'register_hooks'));
    }

    public function register_hooks() {
        if (!$this->divi->supports_dynamic_assets()) { return; }
        add_action('wp_enqueue_scripts', array($this, 'register_assets'), 11); // Enqueue later than 10 to avoid triggering child theme enqueued stylesheet detection in et_divi_enqueue_stylesheet()
        add_action('wp_head', array($this, 'load_assets'));
    }

    public function load_assets() {
        if (!apply_filters("dbdb-load-{$this->group}-assets", false)) { return; }
        if (isset($this->css)) {
            foreach($this->css as $handle=>$path) {
                wp_enqueue_style($handle);
            }
        }
        if (isset($this->js)) {
            foreach($this->js as $handle=>$path) {
                wp_enqueue_script($handle);
            }
        }
    }

    public function register_assets() {
        $version = $this->divi->version();
        if (isset($this->css)) {
            foreach($this->css as $handle=>$path) {
                wp_register_style($handle, $this->divi->url($path), array(), $version);
            }
        }
        if (isset($this->js)) {
            foreach($this->js as $handle=>$path) {
                wp_register_script($handle, $this->divi->url($path), array(), $version, true);
            }
        }
    }
}
