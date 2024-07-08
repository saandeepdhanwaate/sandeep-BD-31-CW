const express = require("express");
const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5];
let strings = ["hello", "world", "javascript", "node"];

// numbers/add .

function addToArr(number, num) {
  number.push(num);
  return number;
}

app.get("/numbers/add", (req, res) => {
  let result = addToArr(numbers, 6);
  res.json({ addedNumher: result });
});

// strings/add
function addString(newString, str) {
  newString.push(str);
  return newString;
}

app.get("/strings/add", (req, res) => {
  let result = addString(strings, "express");
  res.json({ addedString: result });
});

// numbers/sum
function sumNumbers(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
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
