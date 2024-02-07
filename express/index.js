const express = require('express');
const app = express();
const port = 3000;
function middleware1(req, res, next) {
  console.log("from inside the middleware1: " + req.headers.counter);
  next(); 
}

function calculateSum(counter) {
  let sum = 0; 
  for (let i = 1; i <= counter; i++) { 
    sum += i;
  }
  return sum;
}


function handleFirstRequest(req, res) {
  console.log(req.headers);
  const counter = parseInt(req.headers.counter); 
  const sum = calculateSum(counter);
  const answer = "The sum of numbers from 1 to " + counter + " is: " + sum;
  res.send(answer); 
}


app.use(middleware1); 
app.post('/handlesum', handleFirstRequest);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
