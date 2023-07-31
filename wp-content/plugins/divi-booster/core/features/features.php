<?php

include_once(dirname(__FILE__).'/dbdb-posttitle-tags/dbdb-posttitle-tags.php');
include_once(dirname(__FILE__).'/socialmediafollownetworks/socialmediafollownetworks.php');
include_once(dirname(__FILE__).'/contactFormEmailBlacklist/dbdb-contactform-emailblacklist.php');

if (version_compare(phpversion(), '5.3', '>=')) {
    include_once(dirname(__FILE__).'/dbdb-blogmodule-tags/dbdb-blogmodule-tags.php');
    include_once(dirname(__FILE__).'/gallery-order/gallery-order.php');
    include_once(dirname(__FILE__).'/gallery-image-count/gallery-image-count.php');
    include_once(dirname(__FILE__).'/blog-module-author-filter/blog-module-author-filter.php');
    include_once(dirname(__FILE__).'/login-module-custom-redirect-url/login-module-custom-redirect-url.php');
    include_once(dirname(__FILE__).'/slider-module-random-order/slider-module-random-order.php');
    include_once(dirname(__FILE__).'/email-option-button-animation/email-option-button-animation.php');  
}