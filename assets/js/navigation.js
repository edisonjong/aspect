// Remove category navigation item label prefix `- `
document.querySelectorAll('.nav-category > .label').forEach((el) => {
	const linkEl = el.parentNode;
	const formatText = el.textContent.replace(/^-\s?/, '');

	// Change label.
	el.textContent = formatText;

	// Change tooltip attribute.
	if (linkEl.hasAttribute('data-tippy-content')) {
		linkEl.setAttribute('data-tippy-content', formatText);
	}
});
