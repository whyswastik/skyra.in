document.addEventListener("DOMContentLoaded", () => {

  const cartIcon = document.querySelector(".cart-icon");
  const goCheckoutBtn = document.getElementById("go-checkout");
  const productCards = document.querySelectorAll(".product-card");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");

  // ================= ADD TO CART =================
  document.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", () => {

      const card = btn.closest(".product-card");

      // ===== GET DATA (FROM PRODUCT-CARD) =====
      const id = card.dataset.id;
      const name = card.dataset.name;
      const price = parseInt(card.dataset.price);
      const image = card.dataset.image;

      // ===== SIZE CHECK (for product pages / future use) =====
      let size = "";
      const sizeBtns = card.querySelectorAll(".sizes button.active");
      if (sizeBtns.length > 0) {
        size = sizeBtns[0].innerText;
      }

      if (card.querySelector(".sizes") && size === "") {
        alert("Please select a size first!");
        return;
      }

      // ===== CART LOGIC =====
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find(
        item => item.id === id && item.size === size
      );

      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id,
          name,
          price,
          image,
          size,
          qty: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      // ===== UI FEEDBACK =====
      btn.innerText = "Added ✔";
      btn.disabled = true;

      setTimeout(() => {
        btn.innerText = "Add to Cart";
        btn.disabled = false;
      }, 1000);

    });
  });

  // ================= CART ICON & BUTTON =================
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }

  if (goCheckoutBtn) {
    goCheckoutBtn.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }

  // ================= FILTER =================
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      const filter = btn.innerText.toLowerCase();

      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      productCards.forEach(product => {
        const title = product.querySelector("h3").innerText.toLowerCase();
        product.style.display =
          (filter === "all" || title.includes(filter)) ? "block" : "none";
      });

    });
  });

  // ================= SEARCH =================
  if (searchIcon && searchInput) {

    searchIcon.addEventListener("click", () => {
      searchInput.classList.toggle("active");
    });

    searchInput.addEventListener("keyup", () => {
      const value = searchInput.value.toLowerCase();

      productCards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
      });
    });

  }

});
