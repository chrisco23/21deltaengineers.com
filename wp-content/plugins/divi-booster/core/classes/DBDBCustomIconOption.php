<?php // Represents the custom icon option (db014) in the Divi Booster settings page

if (!class_exists('DBDBCustomIconOption')) {

    class DBDBCustomIconsOption {

        private $option;
    
        static function create($option) {
            return new self($option);
        }
    
        private function __construct($option) {
            $this->option = $option;
        }
    
        public function keys() {
            $result = array();
            for($i=0; $i<=$this->max(); $i++) {
                if (!empty($this->option[$this->key($i)])) {
                    $result[] = $this->key($i);
                }
            }
            return $result;
        }
    
        public function next_key() {
            return $this->key($this->next_index());
        }
    
        public function next_index() {
            $max = $this->max();
            return $max + (empty($this->option["url".$max])?0:1);
        }
    
        public function max() {
            return isset($this->option['urlmax'])?intval($this->option['urlmax']):0;
        }
    
        private function key($i) {
            return "url$i";
        }
    }
}