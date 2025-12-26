const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

let answer = 0;

const lineLength = lines[0].length;
const valuableLines = lines.length;

let operator = "";
let numbers = [];
for (let i = 0; i < lineLength; i++) {
  let number = "";
  let whitespaceCounter = 0;
  for (let j = 0; j < valuableLines; j++) {
    if (!lines[j][i] || lines[j][i].trim() === "") {
      whitespaceCounter++;
    } else if (lines[j][i] === "*" || lines[j][i] === "+") {
      operator = lines[j][i];
      whitespaceCounter++;
    } else {
      number += lines[j][i];
    }
  }
  if (whitespaceCounter < valuableLines) {
    numbers.push(number);
    if (i + 1 === lineLength) {
      if (operator === "+") {
        answer += numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      } else {
        answer += numbers.reduce((a, b) => parseInt(a) * parseInt(b), 1);
      }
      numbers = [];
      operator = "";
    }
  } else {
    if (operator === "+") {
      answer += numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    } else {
      answer += numbers.reduce((a, b) => parseInt(a) * parseInt(b), 1);
    }
    numbers = [];
    operator = "";
  }
  number = "";
  whitespaceCounter = 0;
}

console.log("Puzzle answer:", answer);
