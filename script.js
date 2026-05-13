/* ===== LOADER ===== */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.6s ease";
    setTimeout(() => loader.style.display = "none", 600);
  }, 2000);
});

/* ===== DUAL CURSOR ===== */
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Smooth follower
function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Scale cursor on hover
document.querySelectorAll('a, button, .btn, .card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    follower.style.width = '50px';
    follower.style.height = '50px';
    follower.style.borderColor = 'rgba(127,92,255,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.width = '30px';
    follower.style.height = '30px';
    follower.style.borderColor = 'rgba(127,92,255,0.6)';
  });
});

/* ===== MOBILE MENU ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ===== 3D TILT ON CARDS ===== */
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 8,
  speed: 400,
  glare: true,
  "max-glare": 0.15,
  scale: 1.02,
});

/* ===== PARTICLES ===== */
tsParticles.load("particles-js", {
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: ["#7f5cff", "#00d4ff", "#ff6b9d"] },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
    size: { value: 2.5, random: true },
    move: { enable: true, speed: 1.2, direction: "none", random: true, straight: false, out_mode: "out" },
    links: {
      enable: true,
      distance: 130,
      color: "#7f5cff",
      opacity: 0.25,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
      push: { quantity: 3 }
    }
  }
});

/* ===== SCROLL REVEAL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .section-label, .title').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#fff' : '';
  });
});