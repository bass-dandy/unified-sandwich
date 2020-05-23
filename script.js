const sections = document.getElementsByTagName('section');

for (let i = 0; i < sections.length; i++) {
	// adjust vertical rootMargin to account for sections that are taller than the viewport
	// the difference between section and viewport height is divided by 2 since the margin applies to both top and bottom
	const margin = (sections[i].clientHeight - document.documentElement.clientHeight) / 2;

	const config = {
		threshold: 0.75,
		rootMargin: `${margin}px 0px`
	};

	const observer = new IntersectionObserver((entries) => {
		for (let i = 0; i < entries.length; i++) {
			if (entries[i].isIntersecting) {
				const tgt = entries[i].target;
				tgt.classList.add('in');
				observer.unobserve(tgt);
			}
		}
	}, config);

	observer.observe(sections[i]);
}
