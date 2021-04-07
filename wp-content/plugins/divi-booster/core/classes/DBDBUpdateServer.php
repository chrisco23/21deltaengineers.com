<?php
if (!class_exists('DBDBUpdateServer')) {
	class DBDBUpdateServer {
	 
		private $url;
	 
		static function create() {
			return new self();
		}
		
		private function __construct() {
			$this->url = 'https://d3mraia2v9t5x8.cloudfront.net';
		}
		
		public function url($path='') {
			return $this->url.'/'.$path;
		}
		
		public function updatesUrl() {
			return apply_filters('dbdb_update_url', $this->url('updates.json'));
		}
	}
}