/* Simple JS for smooth scroll, basic reveal animations and mobile nav placeholder */

document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Basic reveal on scroll
  const revealNodes = document.querySelectorAll('.hero-left, .photo-circle, .about-box, .skill-card, .project-card, .contact-left, .contact-form');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.transition = 'opacity .9s ease, transform .9s cubic-bezier(.2,.9,.2,1)';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});

  revealNodes.forEach(n=>{
    n.style.opacity = '0';
    n.style.transform = 'translateY(30px)';
    observer.observe(n);
  });

  // optional: floating dots (small decorative animation) - create a dot
  // (This is intentionally light and optional)
  const createDot = (x,y,delay) => {
    const dot = document.createElement('div');
    dot.style.position='fixed';
    dot.style.width='14px'; dot.style.height='14px'; dot.style.borderRadius='50%';
    dot.style.background='rgba(140,110,215,0.8)'; dot.style.left = x + 'px'; dot.style.top = y + 'px';
    dot.style.zIndex = '5'; dot.style.opacity = '0.9';
    dot.style.filter='blur(0.6px)';
    dot.style.transition = transformlineaopacitys (delay);
    document.body.appendChild(dot);
    setTimeout(()=> { dot.style.transform = 'translateY(900px) translateX(-140px) rotate(90deg)'; dot.style.opacity='0'; }, 50);
    setTimeout(()=> dot.remove(), 7000);
  };

  // create a few dots for decoration
  createDot(window.innerWidth * 0.66, 180, 0.6);
  createDot(window.innerWidth * 0.25, 420, 1.4);
});