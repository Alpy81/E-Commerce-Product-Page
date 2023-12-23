// Gestaltung der Sidebar

function hideSidebar() {
  document.getElementById("openSideMenu").checked = false;
}

var sideIconToggle = document.getElementById("sidebarContainer");

document.addEventListener("click", function (event) {
  if (!sidebarContainer.contains(event.target)) hideSidebar();
});

// Zählerfunktion bei Mengenauswahl des Products

function updateQuantity(change) {
  var quantityElement = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityElement.innerText);
  var newQuantity = currentQuantity + change;
  newQuantity = Math.max(0, newQuantity);
  quantityElement.innerText = newQuantity;
}

// Funktion zum Anzeigen des Cart-Fensters

function showCartWindow() {
  var productImage = document.getElementById("product-main");
  var productName = "Autum Limited Edition..";
  var basePrice = 125.0;
  var selectedQuantity = parseInt(
    document.getElementById("quantity").innerText
  );
  var totalPrice = selectedQuantity * 125.0;

  // Löschen des gesamten Inhalts des Cart-Fensters

  window.deleteCartItem = deleteCartItem;

  // Erstellen Sie das Cart-Fenster

  var cartWindow = document.createElement("div");
  cartWindow.id = "cart-window";
  cartWindow.style.position = "fixed";
  cartWindow.style.top = "50%";
  cartWindow.style.left = "50%";
  cartWindow.style.transform = "translate(-50%, -50%)";
  cartWindow.style.width = "300px";
  cartWindow.style.height = "210px";
  cartWindow.style.padding = "20px";
  cartWindow.style.backgroundColor = "#fff";
  cartWindow.style.border = "1px solid #ccc";
  cartWindow.style.borderRadius = "10px";
  cartWindow.style.zIndex = "1000";

  // Inhalt des Cart-Fensters

  cartWindow.innerHTML = `
  <h4 style="margin-bottom: 10px; font-family: KumbhSans-Bold; border-radius: 5px;">Cart</h4>
  <hr style="margin-bottom: 10px; border-radius: 5px;">
  <div style="display: flex; align-items: center; margin-bottom: 15px; border-radius: 5px;">
    <img src="${
      productImage.src
    }" alt="${productName}" style="width: 50px; height: 50px; margin-right: 10px; border-radius: 5px;">
    <div>
      <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 14px;">${productName}</p>
      <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 14px;">$${basePrice.toFixed(
        2
      )} x ${selectedQuantity} = <span style="color: black; font-family: KumbhSans-Bold;">$${totalPrice.toFixed(
    2
  )}</span>
      </p>
      
    </div>
    <img src="./img/image-delete.png" alt="delete" style="cursor: pointer; margin-top: 1rem; margin-left: auto;" onclick="deleteCartItem()">
  </div>
  <button id="checkoutButton" style="padding: 10px; background-color: hsl(26, 100%, 55%); margin-bottom: 5px; color: #fff; border: none; border-radius: 10px; cursor: pointer;">Checkout</button>
`;

  function deleteCartItem() {
    // Implementieren Sie hier die Logik zum Löschen des Artikels aus dem Warenkorb
  }

  // Verschiebe das Cart-Fenster weiter oben
  cartWindow.style.top = "23%";

  // Fügen Sie das Cart-Fenster zum Body-Element hinzu
  document.body.appendChild(cartWindow);

  // Hinzufügen eines Event Listeners zum Checkout-Button
  var checkoutButton = document.getElementById("checkoutButton");
  checkoutButton.addEventListener("click", function () {
    // Hier kannst du die Logik für den Checkout implementieren
    // Zum Beispiel eine Weiterleitung zu einer Checkout-Seite oder ähnliches
    alert("Checkout clicked!");
  });
}

// Event Listener für den "Add to Cart" Button
var addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", showCartWindow);
