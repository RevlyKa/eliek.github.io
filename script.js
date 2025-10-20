const sections = document.querySelectorAll('section');
const heroText = document.querySelectorAll('#hero h1, #hero p');
const bands = document.querySelectorAll('.band');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight - 100;

  // Fade-in des sections
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < trigger) section.classList.add('visible');
  });

  // Fade-in du hero text
  heroText.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight) el.style.opacity = 1, el.style.transform = 'translateY(0)';
  });

  // Apparition des bandes
  bands.forEach(band => {
    const top = band.getBoundingClientRect().top;
    if(top < trigger) band.style.opacity = 1, band.style.transform = 'scaleX(1)';
  });
});
