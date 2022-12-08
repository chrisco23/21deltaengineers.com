<?php
if (!class_exists('DBDBElement')) {
	class DBDBElement {

        private $html;
        
        static function fromHtmlString($html) {
            return new self($html);
        }

        private function __construct($html) {
            $this->html = (string) $html;
        }

        public function setClasses($classes) {
            $this->html = preg_replace(
                '/^(<[^>]*) class="([^"]*)"/',
                '\\1 class="'.implode(' ', $classes).'"',
                $this->html
            );
        }

        public function getClasses() {
            $classes = array();
            if (preg_match('/class="([^"]+)"/', $this->html, $matches)) {
                $classes = explode(' ', $matches[1]);
            }
            return $classes;
        }

        public function toString() {
            return $this->html;
        }
	}
}