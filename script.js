const links = [...document.querySelectorAll('.category-nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + visible.target.id));
}, {rootMargin:'-25% 0px -60% 0px', threshold:[0,.2,.5]});

sections.forEach(section => observer.observe(section));
