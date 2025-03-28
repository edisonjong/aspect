/**
 * Init features from our PVS framework.
 */

const { pvs } = window;

if (pvs) {
	pvs.initClipboard();
	pvs.initDarkMode();
	pvs.initLightbox({ zIndex: 9999 });
	pvs.initPopup();
	pvs.initScrollbarWidth();
	pvs.initPagination();
	pvs.initDropdown();
	pvs.initPricingDiscount();
	pvs.initPricingUrlSync();
	pvs.registerFeaturedVideo();
	pvs.registerTOC();

	// It is required to init navigation after filter and pagination.
	pvs.initNavigation({ contentSelector: '.layout-default .content' });
}
