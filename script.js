const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX - 3}px`;
    dot.style.top = `${e.clientY - 3}px`;
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
  });
}

document.querySelectorAll("a, button, .project, .skill-card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    if (!ring) return;
    ring.style.transform = "translate(-50%,-50%) scale(1.35)";
  });
  el.addEventListener("mouseleave", () => {
    if (!ring) return;
    ring.style.transform = "translate(-50%,-50%) scale(1)";
  });
});
