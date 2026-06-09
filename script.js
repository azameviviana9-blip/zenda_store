
// ===============================
// MENÚ RESPONSIVE
// ===============================
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// ===============================
// CARGAR PRODUCTOS DESDE LOCALSTORAGE
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderProductsFromStorage();
});

// ===============================
// RENDER PRODUCTOS EN TIENDA
// ===============================
function renderProductsFromStorage() {
  const container = document.querySelector(".products");
  if (!container) return;

  const products = JSON.parse(localStorage.getItem("products")) || [];

  // si no hay productos, mostramos los demo
  if (products.length === 0) return;

  container.innerHTML = "";

  products.forEach((p) => {
    container.innerHTML += `
      <div class="product">
        <div class="img" style="background-image:url('${p.image}'); background-size:cover;"></div>
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="buyProduct('${p.name}')">Comprar</button>
      </div>
    `;
  });
}

// ===============================
// BOTÓN COMPRAR
// ===============================
function buyProduct(name) {
  const phone = "5493764130362";
  const msg = `Hola! quiero comprar: ${name}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
}
