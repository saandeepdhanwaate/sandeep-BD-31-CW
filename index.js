const express = require("express");
const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5];
let strings = ["hello", "world", "javascript", "node"];

// numbers/add

function addNumber(number, num) {
  number.push(num);
  return number;
}

app.get("/numbers/add", (req, res) => {
  let num = parseFloat(req.query.num);
  let result = addNumber(numbers, num);
  res.json({ addedNumher: result });
});

// strings/add
function addString(newString, str) {
  newString.push(str);
  return newString;
}

app.get("/strings/add", (req, res) => {
  let str = req.query.str;
  let result = addString(strings, str);
  res.json({ addedString: result });
});

// numbers/sum
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
app.get("/numbers/sum", (req, res) => {
  let result = sumNumbers(numbers);
  res.json({ sum: result });
});

// numbers/max
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
app.get("/numbers/max", (req, res) => {
  let result = findMax(numbers);
  res.json({ max: result });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
