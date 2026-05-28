/* main.js — Filmora Vintage */

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 20);
}, { passive: true });

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => document.body.classList.remove('nav-open'))
);

// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();
