import { setWillChange } from './card-post';

const { animate, stagger, spring } = window.Motion;
const { on } = window.ivent;

const cardMap = new Map();

// Hover.
on(document, 'mouseenter', '.card-author', (e) => {
	const card = e.delegateTarget;

	// Init map.
	if (!cardMap.has(card)) {
		cardMap.set(card, {
			image: card.querySelector('.card-author-image'),
			badge: card.querySelectorAll('.card-author-socials a'),
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
				'scale3d(1.02, 1.02, 1) rotateX(3.5deg)',
				'scale3d(1.04, 1.04, 1) rotateX(0deg)',
			],
			transformStyle: 'preserve-3d',
		},
		{ easing: spring({ stiffness: 60 }) },
	);

	// Badge animate.
	animate(
		data.badge,
		{
			opacity: 1,
			transform: ['translateY(6px)', 'translateY(0)'],
		},
		{
			delay: stagger(0.1),
			easing: spring({ stiffness: 60 }),
		},
	);
});

// Leave.
on(document, 'mouseleave', '.card-author', (e) => {
	const data = cardMap.get(e.delegateTarget);
	if (!data) return;

	// Will change.
	setWillChange(data);

	// Image animate.
	animate(
		data.image,
		{ transform: 'scale3d(1, 1, 1) rotateX(0deg)' },
		{ easing: spring({ stiffness: 60 }) },
	);

	// Badge animate.
	animate(
		data.badge,
		{
			opacity: 0,
			transform: 'translateY(0)',
		},
		{
			easing: spring({ stiffness: 100 }),
		},
	);
});
