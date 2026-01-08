const qtyInputs = document.querySelectorAll('.item-qty');
const totalSpan = document.getElementById('total');
const payBtn = document.getElementById('pay-btn');

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const price = parseInt(item.querySelector('p').textContent.replace('₹',''));
    const qty = parseInt(item.querySelector('.item-qty').value);
    total += price * qty;
  });
  totalSpan.textContent = total;
}

qtyInputs.forEach(input => input.addEventListener('input', updateTotal));
updateTotal();

payBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  if(!name || !email || !phone || !address){
    alert("Please fill all your details before proceeding!");
    return;
  }

  // Generate product list message
  let productsMsg = '';
  document.querySelectorAll('.cart-item').forEach(item => {
    const pname = item.querySelector('h3').textContent;
    const qty = item.querySelector('.item-qty').value;
    productsMsg += `${pname} x${qty}, `;
  });

  const total = totalSpan.textContent;

  // WhatsApp URL (replace number with your number)
  const phoneNumber = '917088736775'; // aapka WhatsApp number
  const message = `Hello! I want to buy the following products from SKYRA:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nProducts: ${productsMsg}Total: ₹${total}`;
  const waURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(waURL, '_blank');
});

document.querySelectorAll('.remove-item').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.parentElement.remove();
    updateTotal();
  });
});
