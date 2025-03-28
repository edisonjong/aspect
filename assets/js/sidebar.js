import { resizeObserver } from './utils/resize-observer';

const { on, trigger } = window.ivent;
const { documentElement } = document;

const events = {
	collapsed: 'aspect.sidebar.collapsed',
	open: 'aspect.sidebar.open',
};

// Collapse sidebar.
on(document, 'click', '.toggle-sidebar', (e) => {
	e.preventDefault();

	const hasCollapsed =
		documentElement.getAttribute('data-sidebar-collapsed') === 'false';

	// Set toggle aria-expanded.
	e.delegateTarget.setAttribute('aria-expanded', !hasCollapsed);

	// Set attribute.
	documentElement.setAttribute('data-sidebar-collapsed', hasCollapsed);

	// Set local storage.
	localStorage.setItem('sidebar-collapsed', hasCollapsed);
});

resizeObserver('.sidebar', 'width', (entry) => {
	const hasCollapsed = entry.target.clientWidth < 200;

	document
		.querySelector('.toggle-sidebar')
		.setAttribute('aria-expanded', !hasCollapsed);

	trigger(document, hasCollapsed ? events.collapsed : events.open);
});
