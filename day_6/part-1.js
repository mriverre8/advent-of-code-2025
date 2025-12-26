const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

let answer = 0;

const operators = lines[lines.length - 1].trim().split(/\s+/);

const lineLength = operators.length;

const firstLine = lines[0].trim().split(/\s+/);

for (let i = 0; i < lineLength; i++) {
  let operationResult = parseInt(firstLine[i], 10);
  for (let j = 1; j < lines.length - 1; j++) {
    const line = lines[j].trim().split(/\s+/);
    if (operators[i] === "*") {
      operationResult *= parseInt(line[i], 10);
    } else {
      operationResult += parseInt(line[i], 10);
    }
  }
  answer += operationResult;
}

console.log("Puzzle answer:", answer);
