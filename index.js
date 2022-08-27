console.log('Hello');

// Step One: Select all elements
let nameInput = document.querySelector('#name');
let customerNameSpan = document.querySelector('#customer-name');
let menuItemInputs = document.querySelectorAll('.menu-item');
let selectedItemsSpan = document.querySelector('#menu-items');

let menuItems = [];

let paymentMethodInputs = document.querySelectorAll(".payment-method");
let paymentMethodSpan = document.querySelector("#payment-method");

// Step Two: Add Event Listeners
nameInput.addEventListener('input', showCustomerName);

for (let i = 0; i < menuItemInputs.length; i++) {
  menuItemInputs[i].addEventListener('change', selectMenuItem);
}

for (let i = 0; i < paymentMethodInputs.length; i++) {
  paymentMethodInputs[i].addEventListener('change', selectPaymentMethod);
}

// Step Three: Define Functions for tasks
function showCustomerName(event) {
  // Value of Input: event.target.value
  customerNameSpan.innerText = event.target.value;
}

function selectMenuItem(event) {
  if (event.target.checked === true) {
    menuItems.push(event.target.value);

  } else {
    const filteredMenuItems = menuItems.filter(
      (menuItem) => {
        return menuItem != event.target.value
      }
    );

    menuItems = filteredMenuItems;
  }

  selectedItemsSpan.innerText = menuItems;
}

function selectPaymentMethod(event){
  paymentMethodSpan.innerText = event.target.value;
}