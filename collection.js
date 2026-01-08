document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- CART COUNT (SYNC) ---------------- */
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartIcon = document.querySelector(".icons span:nth-child(2)");

  if (cartIcon) {
    cartIcon.textContent = `🛒 ${cart.length}`;
  }

  /* ---------------- COLLECTION CARD ANIMATION ---------------- */
  document.querySelectorAll(".collection-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });

  });

  /* ---------------- SHOP ERA REDIRECT (SMART) ---------------- */
  document.querySelectorAll(".collection-card").forEach(card => {
    card.addEventListener("click", () => {

      if (card.classList.contains("zero")) {
        window.location.href = "shop.html#zero";
      }
      else if (card.classList.contains("build")) {
        window.location.href = "shop.html#build";
      }
      else if (card.classList.contains("rise")) {
        window.location.href = "shop.html#rise";
      }
      else if (card.classList.contains("legacy")) {
        window.location.href = "shop.html#legacy";
      }

    });
  });

});
const cartIcon = document.querySelector(".cart-icon, .icons span:nth-child(2)");

if(cartIcon){
  cartIcon.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
}
