const storeItems = {
  Apple: 0.99,
  Banana: 0.59,
  Milk: 2.49,
  Bread: 1.99,
  Eggs: 3.29
};

// Step 2: Get the HTML elements we'll use
const storeItemsDiv = document.getElementById("store-items");
const cartList = document.getElementById("cart");
const cartTotalSpan = document.getElementById("cart-total");

let cartTotal = 0;

// Step 3: Create buttons for each store item
for (let item in storeItems) {
  // Create button
  const button = document.createElement("button");
  const buttonText = document.createTextNode(`${item} - $${storeItems[item]}`);
  button.appendChild(buttonText);

  // Add event listener
  button.addEventListener("click", (event) => {
    handleItemClick(event);
  });

  // Add button to the store items div
  storeItemsDiv.appendChild(button);
}

// Step 4: Handle store item clicks
function handleItemClick(event) {
  const fullText = event.target.textContent;
  const itemName = fullText.split(" - $")[0]; // get name before the dash

  // Add item to the cart list
  const listItem = document.createElement("li");
  const listText = document.createTextNode(itemName);
  listItem.appendChild(listText);
  cartList.appendChild(listItem);

  // Add price to total
  const itemPrice = storeItems[itemName];
  cartTotal += itemPrice;

  // Update total in the page
  cartTotalSpan.innerHTML = cartTotal.toFixed(2);
}
