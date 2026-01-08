document.addEventListener("DOMContentLoaded", ()=>{
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalEl = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkout-btn");

  function renderCart(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if(cart.length===0){
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      totalEl.innerText = "₹0";
      return;
    }

    cart.forEach((item, index)=>{
      total += item.price * item.qty;
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="80">
        <div class="details">
          <h4>${item.name}</h4>
          <p>₹${item.price} × ${item.qty}</p>
          <div class="qty-controls">
            <button class="qty-minus">−</button>
            <span>${item.qty}</span>
            <button class="qty-plus">+</button>
          </div>
          <button class="remove-btn">Remove</button>
        </div>
        <p class="subtotal">₹${item.price * item.qty}</p>
      `;

      // qty
      cartItem.querySelector(".qty-minus").addEventListener("click", ()=> changeQty(index,-1));
      cartItem.querySelector(".qty-plus").addEventListener("click", ()=> changeQty(index,1));
      cartItem.querySelector(".remove-btn").addEventListener("click", ()=>{
        cart.splice(index,1);
        updateCart();
      });

      cartItemsContainer.appendChild(cartItem);
    });

    totalEl.innerText = `₹${total}`;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function changeQty(index, delta){
    cart[index].qty += delta;
    if(cart[index].qty<=0) cart.splice(index,1);
    updateCart();
  }

  function updateCart(){
    renderCart();
  }

  renderCart();

  if(checkoutBtn){
    checkoutBtn.addEventListener("click", ()=>{
      if(cart.length===0){ alert("Cart is empty!"); return; }
      window.location.href="checkout.html";
    });
  }

});
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();

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
