// Handle menu button toggle functionality for mobile navbar
const btnMenu = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navbar");

btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// Arrays for From and To places
const fromPlaces = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
const toPlaces = ["San Francisco", "Seattle", "Denver", "Boston", "Las Vegas"];

// Function to setup autocomplete functionality
function setupAutocomplete(inputFieldId, listId, placesArray) {
  const inputField = document.getElementById(inputFieldId); // Input element
  const autocompleteList = document.getElementById(listId); // List for autocomplete suggestions

  // Show filtered suggestions based on input query
  function showSuggestions(query) {
    const filteredPlaces = placesArray.filter(place => place.toLowerCase().includes(query.toLowerCase()));
    
    // Update list with matching places
    autocompleteList.innerHTML = filteredPlaces.map(place => 
      `<li role="option">${place}</li>`
    ).join('');
    
    // Show or hide autocomplete suggestions
    autocompleteList.classList.toggle("show-autocomplete", filteredPlaces.length > 0);
  }

  // Event listeners to show suggestions while typing or focusing the input field
  inputField.addEventListener("input", () => showSuggestions(inputField.value));
  inputField.addEventListener("focus", () => showSuggestions(inputField.value));

  // Set input value on suggestion click and close autocomplete list
  autocompleteList.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
      inputField.value = e.target.textContent;
      autocompleteList.classList.remove("show-autocomplete");
    }
  });

  // Hide autocomplete list when clicking outside
  document.addEventListener("click", (e) => {
    if (!inputField.contains(e.target) && !autocompleteList.contains(e.target)) {
      autocompleteList.classList.remove("show-autocomplete");
    }
  });
}

// Initialize autocomplete for 'from' and 'to' locations
setupAutocomplete("from-location", "from-autocomplete-list", fromPlaces);
setupAutocomplete("to-location", "to-autocomplete-list", toPlaces);


// Initialize passenger counts and selected class
let adultCount = 0;
let teenCount = 0;
let infantCount = 0;
let selectedClass = '';

// Update Passenger Details display field
function updatePassengerDetails() {
    let totalPassengers = adultCount + teenCount + infantCount;
    let passengerText = totalPassengers + " Passenger";
    
    // Adjust pluralization for multiple passengers
    if (totalPassengers > 1) {
        passengerText += "s";
    }

    // Include the selected class (Premium or Economy) in the display
    if (selectedClass) {
        passengerText += " " + selectedClass;
    }

    // Update the placeholder of the passenger details field
    document.getElementById('passenger-details').placeholder = passengerText;
}

// Check if the total passengers do not exceed 9
function canIncrement(type) {
    const total = adultCount + teenCount + infantCount;
    return (total < 9 || type === 'decrement'); // Allow decrementing even if total is 9 or above
}

// Increment/Decrement functionality for Adults
document.getElementById('increment-adult-btn').addEventListener('click', function () {
    if (canIncrement('increment')) {
        adultCount++;
        document.getElementById('adult-number').innerText = adultCount; // Update adult count display
        updatePassengerDetails(); // Update passenger details display
    }
});

document.getElementById('decrement-adult-btn').addEventListener('click', function () {
    if (adultCount > 0) {
        adultCount--;
        document.getElementById('adult-number').innerText = adultCount; // Update adult count display
        updatePassengerDetails(); // Update passenger details display
    }
});

// Increment/Decrement functionality for Teens
document.getElementById('increment-teen-btn').addEventListener('click', function () {
    if (canIncrement('increment')) {
        teenCount++;
        document.getElementById('teen-number').innerText = teenCount; // Update teen count display
        updatePassengerDetails(); // Update passenger details display
    }
});

document.getElementById('decrement-teen-btn').addEventListener('click', function () {
    if (teenCount > 0) {
        teenCount--;
        document.getElementById('teen-number').innerText = teenCount; // Update teen count display
        updatePassengerDetails(); // Update passenger details display
    }
});

// Increment/Decrement functionality for Infants
document.getElementById('increment-infant-btn').addEventListener('click', function () {
    if (canIncrement('increment')) {
        infantCount++;
        document.getElementById('infant-number').innerText = infantCount; // Update infant count display
        updatePassengerDetails(); // Update passenger details display
    }
});

document.getElementById('decrement-infant-btn').addEventListener('click', function () {
    if (infantCount > 0) {
        infantCount--;
        document.getElementById('infant-number').innerText = infantCount; // Update infant count display
        updatePassengerDetails(); // Update passenger details display
    }
});

// Event listeners to update selected class (Economy or Premium)
document.querySelectorAll('input[name="class"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        // Update the selected class based on radio button selection
        selectedClass = this.value === 'premium' ? "Premium" : "Economy";
        updatePassengerDetails(); // Update passenger details display with selected class
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const passengerDetails = document.getElementById('passenger-details');
  const passengerRow = document.querySelector('.passenger-row');

  // Show the passenger row when the input is focused
  passengerDetails.addEventListener('focus', () => {
      passengerRow.style.display = 'block';
  });

  // Hide the passenger row when clicking outside of it
  document.addEventListener('click', (event) => {
      if (!passengerDetails.contains(event.target) && !passengerRow.contains(event.target)) {
          passengerRow.style.display = 'none';
      }
  });

  // Example increment and decrement functionality
  let adultCount = 0;

  document.getElementById('increment-adult-btn').addEventListener('click', function () {
      adultCount++;
      document.getElementById('adult-number').innerText = adultCount;
      updatePassengerDetails();
  });

  document.getElementById('decrement-adult-btn').addEventListener('click', function () {
      if (adultCount > 0) {
          adultCount--;
          document.getElementById('adult-number').innerText = adultCount;
          updatePassengerDetails();
      }
  });

  // Function to update passenger details placeholder
  function updatePassengerDetails() {
      const totalPassengers = adultCount; // Add other counts as needed
      passengerDetails.placeholder = totalPassengers + " Passenger" + (totalPassengers !== 1 ? "s" : "");
  }
});

let button = document.getElementById("iterateButton");
let numberDisplay = document.getElementById("number1");

function java() {
    var langs = ['C', 'C++', 'Python', 'Java', 'JavaScript'];

    for (let i = 0; i < langs.length; i++) {
        document.write('Language #' + (i + 1) + ': ' + langs[i] + '<br>');
    }
}

button.addEventListener("click", java);

function Search(a, b) {

    let userA = prompt("Enter value for a:");
    let userB = prompt("Enter value for b:");

    let numA = Number(userA);
    let numB = Number(userB)

    let c1 = numA + numB; // Add the numbers

      // Display the results
    document.write(`You entered a: ${numA} and b: ${numB}, and your answer is ${c1}.`); 
}
  
Search(3, 4);