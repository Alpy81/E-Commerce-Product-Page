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

  // Aktualisierung der Anzeige im Warenkorb-Icon
  if (currentQuantity > 0) {
    cartQuantityElement.innerText = currentQuantity;
    cartQuantityElement.style.position = "absolute";
    cartQuantityElement.style.right = "171px";
    cartQuantityElement.style.top = "35px";
    cartQuantityElement.style.border = "0px solid";
    cartQuantityElement.style.borderRadius = "20px";
    cartQuantityElement.style.padding = "0 6px";
    cartQuantityElement.style.fontWeight = "400";
    cartQuantityElement.style.fontSize = "11px";
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
    // Reduzierung der Menge im Warenkorb-Icon auf 0
    cartQuantityElement.innerText = "";
    cartWindow.innerHTML = "";
    // Entfernen des Warenkorbfensters
    cartWindow.parentNode.removeChild(cartWindow);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart");
  cartIcon.addEventListener("click", showCartWindow);

  // Funktion zum Anzeigen des Warenkorbfensters
  function showCartWindow() {
    const productImage = document.getElementById("product-main");
    const quantityElement = document.getElementById("quantity");
    const productName = "Autum Limited Edition..";
    const selectedQuantity = parseInt(quantityElement.innerText);
    const basePrice = 125.0;
    const totalPrice = selectedQuantity * basePrice;

    if (!productImage) {
      console.error("Element with ID 'product-main' not found");
      return;
    }

    // Erstellen des Warenkorbfensters
    const cartWindow = document.createElement("div");
    cartWindow.id = "cart-window";
    cartWindow.style.position = "absolute";
    cartWindow.style.top = "10%";
    cartWindow.style.left = "85%";
    cartWindow.style.transform = "translate(-50%, 0)";
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
  ${selectedQuantity > 0 ? "Cart" : "Cart"}
</h4>
${
  selectedQuantity > 0
    ? `
      <hr style="margin-bottom: 10px; border-radius: 10px; margin-left: -20px; width: 115%">
      <div style="display: flex; align-items: center; width: 120%; margin-bottom: 15px; border-radius: 10px;">
        <img src="${
          productImage.src
        }" alt="${productName}" style="width: 60px; height: 60px; margin-right: 10px; border-radius: 5px;">
        <div>
          <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 16px;">${productName}</p>
          <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 16px;">
            $${basePrice.toFixed(2)} x ${selectedQuantity} =
            <span style="color: black; font-family: KumbhSans-Bold;">$${totalPrice.toFixed()}</span>
          </p>
        </div>
        <img src="../img/image-delete.png" style="cursor: pointer; margin-top: 2.3rem; margin-right: 3rem;" onclick="deleteCartItem()">
      </div>
      <button id="checkoutButton" style="padding: 10px 50px; margin-left: 3rem; margin-top: 2rem; background-color: hsl(26, 100%, 55%); color: #fff; border: none; border-radius: 10px; cursor: pointer;">Checkout</button>
    `
    : `
      <hr style="margin-bottom: 10px; margin-left: -20px; width: 115%;">
      <h4 style="display: flex; justify-content: center; align-items: center; margin-top: 3rem; color: hsl(219, 9%, 45%); font-family: KumbhSans-Bold; font-size: 15px;">Your Cart is Empty</h4>
      <img src="../img/image-delete.png" style="cursor: pointer; margin-top: 4rem; margin-left: 15rem;" onclick="deleteCartItem()">
    `
}`;

    document.body.appendChild(cartWindow);

    const checkoutButton = document.getElementById("checkoutButton");
    if (checkoutButton && selectedQuantity > 0) {
      checkoutButton.addEventListener("click", function () {
        alert("Please wait for payment process ..");
      });
    }

    // Event Listener zum Schließen des Warenkorbfensters bei Klick außerhalb
    document.addEventListener("click", function (event) {
      if (!cartWindow.contains(event.target) && event.target !== cartIcon) {
        // Klick war außerhalb des Warenkorbfensters und nicht auf das Warenkorb-Symbol
        deleteCartItem();
      }
    });
  }
});
