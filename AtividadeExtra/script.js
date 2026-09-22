// Destaca no sumário a seção que está visível na tela.
const tocLinks = Array.from(document.querySelectorAll('.toc a'));
const sections = tocLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setActive(id) {
  tocLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    entries => {
      // Escolhe a seção mais próxima do topo que está visível.
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length) {
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(topMost.target.id);
      }
    },
    { rootMargin: '-84px 0px -70% 0px', threshold: 0 }
  );
  sections.forEach(section => observer.observe(section));
}

// Botão "voltar ao topo": aparece depois de rolar um pouco a página.
const topBtn = document.getElementById('top-btn');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('visible', window.scrollY > 480);
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
