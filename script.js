document.body.classList.remove('no-js');

const observer = new IntersectionObserver((entries) => {
	for (let i = 0; i < entries.length; i++) {
		if (entries[i].isIntersecting) {
			const tgt = entries[i].target;
			tgt.classList.add('in');
			observer.unobserve(tgt);
		}
	}
}, {threshold: [0.75]});

const sections = document.getElementsByTagName('section');

for (let i = 0; i < sections.length; i++) {
	observer.observe(sections[i]);
}
