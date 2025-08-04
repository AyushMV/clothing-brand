let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function clearCart() {
  cart = [];
  renderCart();
}


// whishlist

let wishlist = [];

function addToWishlist(product) {
  if (!wishlist.includes(product)) {
    wishlist.push(product);
    renderWishlist();
  }
}

function renderWishlist() {
  let wishlistDiv = document.getElementById('wishlist-items');
  if (!wishlistDiv) {
    wishlistDiv = document.createElement('ul');
    wishlistDiv.id = 'wishlist-items';
    document.getElementById('cart').after(wishlistDiv);
  }
  wishlistDiv.innerHTML = '';
  wishlist.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    wishlistDiv.appendChild(li);
  });
}
