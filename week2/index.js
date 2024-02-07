const express = require('express');
const app = express();
const port = 30000;

// Middleware to log counter header and proceed to next handler
function middleware1(req, res, next) {
  console.log("from inside the middleware: " + req.headers.counter);
  next(); // Call next middleware or route handler
}

// Calculate sum of numbers from 1 to counter
function calculateSum(counter) {
  let sum = 0; // Use `let` for block-scoped variable
  for (let i = 1; i <= counter; i++) { // Start loop from 1 for correct summatio
    sum += i; // Increment sum using +=
  }
  return sum;
}

// Handle POST request to /handlesum endpoint
function handleFirstRequest(req, res) {
  console.log(req.headers);
  const counter = parseInt(req.headers.counter); // Parse counter as integer
  const sum = calculateSum(counter); // Calculate sum using corrected function
  const answer = "The sum of numbers from 1 to " + counter + " is: " + sum;
  res.send(answer); // Send complete answer string
}

// Start the server
app.use(middleware1); // Apply middleware globally
app.post('/handlesum', handleFirstRequest);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
