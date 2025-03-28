const { animate, spring } = window.Motion;
const { on } = window.ivent;

const cardMap = new Map();

export function setWillChange(data, isHover = false) {
	if (data.timeout) {
		clearTimeout(data.timeout);
	}
	data.image.style.willChange = 'transform';
	data.timeout = setTimeout(() => {
		data.image.style.willChange = '';

		// Update position tooltips.
		if (!isHover) return;
		data.image
			.querySelectorAll('[data-tippy-content]')
			.forEach(({ _tippy }) => {
				if (_tippy && _tippy.popperInstance) {
					_tippy.popperInstance.update();
				}
			});
	}, 300);
}

// Hover.
on(document, 'mouseenter', '.card-post:not(.card-post-featured)', (e) => {
	const card = e.delegateTarget;

	// Set map.
	if (!cardMap.has(card)) {
		cardMap.set(card, {
			image: card.querySelector('.card-post-image'),
			tippy: card.querySelectorAll('[data-tippy-content]'),
			timeout: null,
		});
	}

	const data = cardMap.get(card);

	// Will change.
	setWillChange(data, true);

	// Image animate.
	animate(
		data.image,
		{
			transform: [
				'scale3d(1, 1, 1) rotateX(0deg)',
				'scale3d(1.02, 1.02, 1) rotateX(5deg)',
				'scale3d(1.04, 1.04, 1) rotateX(0deg)',
			],
			transformStyle: 'preserve-3d',
		},
		{ easing: spring({ stiffness: 50 }) },
	);
});

// Leave.
on(document, 'mouseleave', '.card-post:not(.card-post-featured)', (e) => {
	const data = cardMap.get(e.delegateTarget);
	if (!data) return;

	// Will change.
	setWillChange(data);

	// Image animate.
	animate(
		data.image,
		{ transform: 'scale3d(1, 1, 1) rotateX(0deg)' },
		{ easing: spring({ stiffness: 50 }) },
	);
});
