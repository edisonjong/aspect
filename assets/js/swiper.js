import Swiper from 'swiper';
import {
	Mousewheel,
	Navigation,
	FreeMode,
	EffectCreative,
} from 'swiper/modules';

const { on } = window.ivent;

let featuredInitialSlide = 0;

const swiperOptions = (slider) => ({
	tags: {
		modules: [Navigation, FreeMode, Mousewheel],
		navigation: {
			nextEl: '.slider-tags .slider-button-next',
			prevEl: '.slider-tags .slider-button-prev',
		},
		slidesPerView: 'auto',
		spaceBetween: 6,
		freeMode: true,
		grabCursor: true,
		touchEventsTarget: 'container',
		initialSlide: parseFloat(slider.getAttribute('data-initial-slide')) || 0,
		mousewheel: {
			enabled: true,
			forceToAxis: true,
		},
	},
	featured: {
		modules: [Navigation, EffectCreative],
		navigation: {
			nextEl: '.slider-featured .slider-button-next',
			prevEl: '.slider-featured .slider-button-prev',
		},
		slidesPerView: 1,
		spaceBetween: 16,
		speed: 600,
		autoHeight: true,
		grabCursor: true,
		effect: 'creative',
		creativeEffect: {
			perspective: true,
			prev: {
				translate: [0, -10, -1],
				scale: 0.92,
			},
			next: {
				translate: ['120%', 0, 0],
				scale: 1,
			},
		},
	},
	cards: {
		modules: [Navigation],
		navigation: {
			nextEl: slider.querySelector('.slider-button-next'),
			prevEl: slider.querySelector('.slider-button-prev'),
		},
		slidesPerView: 'auto',
		spaceBetween: 16,
		grabCursor: true,
		touchEventsTarget: 'container',
		breakpoints: {
			440: {
				spaceBetween: 17.5,
			},
			540: {
				spaceBetween: 18.75,
			},
			768: {
				spaceBetween: 21.6,
			},
			992: {
				spaceBetween: 24.4,
			},
			1200: {
				spaceBetween: 27,
			},
			1400: {
				spaceBetween: 30,
			},
		},
	},
});

function swiperInit(name) {
	document.querySelectorAll(`.slider-${name}`).forEach((slider) => {
		const options = swiperOptions(slider)[name];

		// Change initial slide for content-rendered.
		if (name === 'featured') {
			options.initialSlide = featuredInitialSlide;
		}

		const swiper = new Swiper(slider, options);

		// Set initial slide for content-rendered.
		if (name === 'featured') {
			swiper.on('slideChange', (e) => {
				featuredInitialSlide = e.realIndex;
			});
		}

		/**
		 * This is important part used for preventing the click on links with AJAX loading.
		 */
		swiper.on('sliderFirstMove', () => {
			swiper.el.classList.add('swiper-touching');
		});
		swiper.on('touchEnd', () => {
			setTimeout(() => {
				swiper.el.classList.remove('swiper-touching');
			}, 50);
		});
	});
}

swiperInit('tags');
swiperInit('featured');
swiperInit('cards');

on(document, 'pvs.navigation.content-rendered', () => {
	swiperInit('tags');
	swiperInit('featured');
	swiperInit('cards');
});

function isHorizontalScroll(event) {
	return event instanceof WheelEvent && event.deltaX !== 0;
}

function isSwiperTarget(event) {
	return event.target.closest('.slider-tags') !== null;
}

// Disable history browser when trackpad swiping horizontally on .slider-tags.
document.addEventListener(
	'wheel',
	(event) => {
		if (isHorizontalScroll(event) && isSwiperTarget(event)) {
			event.preventDefault();
		}
	},
	{ passive: false },
);
