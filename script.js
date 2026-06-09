

// ===============================
// MENÚ RESPONSIVE (MÓVIL)
// ===============================
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// ===============================
// BOTONES DE COMPRA (BÁSICO)
// ===============================
const buttons = document.querySelectorAll(".product button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Producto agregado (demo). Próximamente carrito 🛒");
  });
});

// ===============================
// SCROLL SUAVE A SECCIONES
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // cerrar menú en móvil después de click
    document.getElementById("nav").classList.remove("active");
  });
});

// ===============================
// EFECTO SIMPLE DE ENTRADA
// ===============================
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card, .product");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.5s ease";
    }
  });
});

// ===============================
// INICIALIZACIÓN
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".card, .product");

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
  });
});
