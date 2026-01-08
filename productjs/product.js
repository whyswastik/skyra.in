// ================= CART SYSTEM =================
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();

  // same product + same size check
  const existing = cart.find(item =>
    item.id === product.id && item.size === product.size
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(product);
  }

  saveCart(cart);
}

// ================= PRODUCT PAGE =================
let selectedSize = "";

// SIZE SELECT
document.querySelectorAll(".sizes button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sizes button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    selectedSize = btn.innerText;
  });
});

// ADD TO CART
document.querySelector(".add-cart").addEventListener("click", function () {

  if (!selectedSize) {
    alert("Select size first");
    return;
  }

  const product = {
    id: this.dataset.id,
    name: this.dataset.name,
    price: this.dataset.price,
    image: this.dataset.image,
    size: selectedSize,
    qty: 1
  };

  addToCart(product);

  // UI FEEDBACK
  this.innerText = "Added ✓";
  this.disabled = true;

  setTimeout(() => {
    this.innerText = "Add to Cart";
    this.disabled = false;
  }, 1000);
});
