// Get the form element
var form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  var data = new FormData(form);

  // Validate the form data
  var arrivalDate = data.get('arrival-date');
  var nights = data.get('nights');
  var adults = data.get('adults');
  var children = data.get('children');
  var name = data.get('name');
  var email = data.get('email');
  var phone = data.get('phone');

  // Check if the arrival date is in the future
  if (new Date(arrivalDate) < new Date()) {
    alert('The arrival date must be in the future');
    return;
  }

  // Check if the number of nights is positive
  if (nights <= 0) {
    alert('The number of nights must be a positive number');
    return;
  }

  // Check if the number of adults is positive
  if (adults <= 0) {
    alert('The number of adults must be a positive number');
    return;
  }

  // Check if the number of children is positive
  if (children < 0) {
    alert('The number of children must be a non-negative number');
    return;
  }

  // Check if the name is not empty
  if (name.trim().length == 0) {
    alert('Please enter a name');
    return;
  }

  // Check if the email is a valid email address
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Check if the phone number is a valid phone number
  if (!/^\d{10,}$/.test(phone)) {
    alert('Please enter a valid phone number');
    return;
  }

  // If the form is valid, submit it
  form.submit();
});