let store = {
  apple: 1.00,
  banana: 0.50,
  milk: 2.00,
  bread: 1.50
};

let shoppingCart = ["apple", "milk", "bread", "banana", "apple"]; // Shopping cart with items


// Function to calculate total
function calculateTotal(cart) {
  let total = 0;

  // Loop through each item in the cart
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let price = store[item]; // get the price from the store
    total = total + price;   // add price to total
  }

  return total;
}

// Call the function and show the result
let totalCost = calculateTotal(shoppingCart);
console.log("Total cost is $" + totalCost);
