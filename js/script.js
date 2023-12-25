// Ausführung der Sidebar

function hideSidebar() {
  document.getElementById("openSideMenu").checked = false;
}

let sideIconToggle = document.getElementById("sidebarContainer");

document.addEventListener("click", function (event) {
  if (!sidebarContainer.contains(event.target)) hideSidebar();
});

// Auswahl der Menge des Produkts
function updateQuantity(change) {
  const quantityElement = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityElement.innerText);
  let newQuantity = Math.max(0, currentQuantity + change);
  quantityElement.innerText = newQuantity;
}

// Funktion, um die Menge im Warenkorb zu aktualisieren
function addToCart() {
  const quantityElement = document.getElementById("quantity");
  const cartQuantityElement = document.getElementById("cart-quantity");

  let currentQuantity = parseInt(quantityElement.innerText);
  // Aktualisiere die Anzeige im Warenkorb-Icon
  if (currentQuantity > 0) {
    cartQuantityElement.innerText = currentQuantity;
    cartQuantityElement.style.position = "absolute";
    cartQuantityElement.style.right = "37px";
    cartQuantityElement.style.top = "-10px";
    cartQuantityElement.style.border = "0px solid";
    cartQuantityElement.style.borderRadius = "20px";
    cartQuantityElement.style.padding = "0 5px";
    cartQuantityElement.style.fontSize = "9px";
    cartQuantityElement.style.backgroundColor = "hsl(26, 95%, 50%)";
    cartQuantityElement.style.color = "white";
  } else {
    cartQuantityElement.innerText = "";
  }
}

// deleteCartItem-Funktion
function deleteCartItem() {
  const cartWindow = document.getElementById("cart-window");
  const cartQuantityElement = document.getElementById("cart-quantity");

  if (cartWindow) {
    // Setze die Menge im Warenkorb-Icon auf 0
    cartQuantityElement.innerText = "";
    // Entferne das Warenkorbfenster
    cartWindow.parentNode.removeChild(cartWindow);
  }
}

// Funktion zum Anzeigen des Warenkorbfensters
// Funktion zum Anzeigen des Warenkorbfensters
function showCartWindow() {
  const productImage = document.getElementById("product-main");
  const quantityElement = document.getElementById("quantity");
  const cartQuantityElement = document.getElementById("cart-quantity");
  const productName = "Autum Limited Edition..";
  const selectedQuantity = parseInt(quantityElement.innerText);
  const basePrice = 125.0;
  const totalPrice = selectedQuantity * basePrice;

  // Erstellen des Warenkorbfensters
  const cartWindow = document.createElement("div");
  cartWindow.id = "cart-window";
  cartWindow.style.position = "fixed";
  cartWindow.style.top = "23%";
  cartWindow.style.left = "50%";
  cartWindow.style.transform = "translate(-50%, -50%)";
  cartWindow.style.width = "300px";
  cartWindow.style.height = "220px";
  cartWindow.style.padding = "20px";
  cartWindow.style.backgroundColor = "#fff";
  cartWindow.style.border = "1px solid #ccc";
  cartWindow.style.borderRadius = "10px";
  cartWindow.style.zIndex = "1000";

  // Inhalt des Warenkorbs
  cartWindow.innerHTML = `
<h4 style="margin-bottom: 10px; font-family: KumbhSans-Bold; border-radius: 10px; color: hsl(219, 9%, 45%);">
  ${selectedQuantity > 0 ? "Cart" : "Empty"}
</h4>
${
  selectedQuantity > 0
    ? `
      <hr style="margin-bottom: 10px; border-radius: 10px;">
      <div style="display: flex; align-items: center; margin-bottom: 15px; border-radius: 10px;">
        <img src="${
          productImage.src
        }" alt="${productName}" style="width: 50px; height: 50px; margin-right: 10px; border-radius: 5px;">
        <div>
          <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 14px;">${productName}</p>
          <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 14px;">
            $${basePrice.toFixed(2)} x ${selectedQuantity} =
            <span style="color: black; font-family: KumbhSans-Bold;">$${totalPrice.toFixed()}</span>
          </p>
        </div>
        <img src="./img/image-delete.png" alt="delete" style="cursor: pointer; margin-top: 1rem; margin-left: auto;" onclick="deleteCartItem()">
      </div>
      <button id="checkoutButton" style="padding: 10px; background-color: hsl(26, 100%, 55%); margin-bottom: 5px; color: #fff; border: none; border-radius: 10px; cursor: pointer;">Checkout</button>
    `
    : `
      <hr style="margin-bottom: 10px; border-radius: 10px;">
      <h4 style="display: flex; justify-content: center; align-items: center; margin-top: 3rem; 
      color: hsl(219, 9%, 45%); font-family: KumbhSans-Bold;">Your Cart is Empty</h4>
    `
}
`;

  document.body.appendChild(cartWindow);

  const checkoutButton = document.getElementById("checkoutButton");
  if (checkoutButton && selectedQuantity > 0) {
    checkoutButton.addEventListener("click", function () {
      alert("Checkout clicked!");
    });
  }
}

// Event Listener für den "Add to Cart" Button
const addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", showCartWindow);

// Event Listener für das Schließen des Warenkorbs bei Klick außerhalb
document.addEventListener("click", function (event) {
  const sidebarContainer = document.getElementById("sidebarContainer");
  if (sidebarContainer && !sidebarContainer.contains(event.target)) {
    hideSidebar();
  }
});
