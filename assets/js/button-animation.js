const { on } = window.ivent;

const mapAnimating = new Map();

on(
	document,
	'mouseenter',
	'.button:not([type="submit"], [disabled], .loading, .complete)',
	(e) => {
		const button = e.delegateTarget;
		const label = button.querySelector('.label');
		let labelWrapper = button.querySelector('.label-wrapper');

		// Return if already animating.
		if (mapAnimating.get(button) || !label) {
			return;
		}

		// Create wrapper.
		if (!labelWrapper) {
			labelWrapper = document.createElement('span');
			labelWrapper.classList.add('label-wrapper');
			labelWrapper.appendChild(label.cloneNode(true));
			labelWrapper.appendChild(label.cloneNode(true));
			label.replaceWith(labelWrapper);
		}

		// Set animation.
		mapAnimating.set(button, true);
		setTimeout(() => {
			mapAnimating.set(button, false);
		}, 400);

		// Add class animation.
		button.classList.remove('button-animation');
		button.offsetHeight;
		button.classList.add('button-animation');
	},
);
