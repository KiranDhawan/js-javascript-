/*login page */

function name(params) {
    
}


// Simulated username and password
const validUsername = "user";
const validPassword = "password123";

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');
  
  // Check if username and password match
  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    window.location.href = "welcome.html"; // Redirect to another page
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Invalid username or password.";
  }
});
