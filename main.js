// HERO BUTTONS
document.addEventListener("DOMContentLoaded", () => {

  // Shop Now button
  const shopBtn = document.querySelector(".btn");
  if (shopBtn) {
    shopBtn.addEventListener("click", () => {
      window.location.href = "shop.html";
    });
  }

  // Explore button
  const exploreBtn = document.querySelector(".btn-outline");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document.querySelector(".categories").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Cart icon click
  const cartIcon = document.querySelector(".icons span:nth-child(2)");
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      alert("🛒 Cart feature coming soon!");
    });
  }

  // Product hover animation (JS based)
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    product.addEventListener("mouseenter", () => {
      product.style.transform = "scale(1.05)";
      product.style.transition = "0.3s";
    });

    product.addEventListener("mouseleave", () => {
      product.style.transform = "scale(1)";
    });
  });

});
const cartIcon = document.querySelector(".cart-icon, .icons span:nth-child(2)");

if(cartIcon){
  cartIcon.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
}
