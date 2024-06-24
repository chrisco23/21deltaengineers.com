import { ScrollToTop } from './modules/scroll-to-top';
import { Notices } from './modules/notices';
import { StickySidebar } from './modules/sticky-sidebar';
import { Support } from './modules/support';

jQuery(function($) {
    StickySidebar.setup(); 
    Notices.setup();
    ScrollToTop.setup();
    Support.setup();
});