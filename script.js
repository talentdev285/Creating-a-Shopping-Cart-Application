// Add event listener to each "Add to Cart" button
const addToCartButtons = document.getElementsByClassName("add-to-cart");
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// Initialize cart array
let cart = [];

// Function to add an item to the cart
function addToCart(event) {
  const productElement = event.target.parentNode.parentNode;
  const productImage = productElement
    .getElementsByClassName("item")[0]
    .getElementsByTagName("img")[0].src;
  const productName =
    productElement.getElementsByClassName("item")[1].textContent;
  const productPrice = productElement
    .getElementsByClassName("item")[2]
    .querySelector("span").textContent;

  const cartItem = {
    name: productName,
    image: productImage,
    price: productPrice,
  };

  cart.push(cartItem);
  updateCart();
}

// Function to update the cart
function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  let totalAmount = 0;

  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];

    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("new", "cart-item");

    const nameElement = document.createElement("div");
    nameElement.classList.add("item");
    nameElement.innerText = cartItem.name;
    cartItemElement.appendChild(nameElement);

    const priceElement = document.createElement("div");
    priceElement.classList.add("item");
    priceElement.innerText = cartItem.price;
    cartItemElement.appendChild(priceElement);

    cartItemsElement.appendChild(cartItemElement);

    // Calculate total amount
    const price = parseFloat(cartItem.price.replace("$", ""));
    totalAmount += price;
  }

  const totalElement = document.createElement("div");
  totalElement.classList.add("new", "cart-item");
  totalElement.innerHTML =
    '<div class="item"><strong>Total</strong></div><div class="item"></div><div class="item"><strong>$' +
    totalAmount.toFixed(2) +
    "</strong></div>";

  cartItemsElement.appendChild(totalElement);
}

// Add event listener to "Clear Cart" button
const clearCartButton = document.getElementById("clear-cart");
clearCartButton.addEventListener("click", clearCart);

// Function to clear the cart
function clearCart() {
  cart = [];
  updateCart();
}
