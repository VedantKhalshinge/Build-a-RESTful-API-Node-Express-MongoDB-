/**
 * @project RESTful API (Node + Express + MongoDB)
 * @author Vedant Khalshinge
 * @copyright 2026 Vedant Khalshinge. All rights reserved.
 * @description Unauthorized copying, modification, or distribution is strictly prohibited.
 */
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToFade = document.querySelectorAll('.fade-up');
  elementsToFade.forEach(el => observer.observe(el));
});

