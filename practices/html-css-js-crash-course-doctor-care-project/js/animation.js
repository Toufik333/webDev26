const animation = ScrollReveal({
  distance: '30px',
  duration: 1500,  
  delay: 400,
  reset: true
});

animation.reveal('.heroimage, .hero-content, .service-content, .about-section, .contact-content', {
  delay: 200,
  origin: 'bottom'
});
animation.reveal('.stats-section, .contact-form', {
  delay: 200,
  origin: 'right'
});
animation.reveal('.stats-section, .contact-form', {
  delay: 200,
  origin: 'left'
});
animation.reveal('.contact-info, .footer', {
  delay: 200,
  origin: 'top'
});
