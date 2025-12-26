const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(",");

function validateId(id) {
  const idStr = id.toString();
  for (let i = 0; i < idStr.length - 1; i++) {
    if (idStr.substring(0, i + 1) === idStr.substring(i + 1, idStr.length)) {
      return true;
    }
  }
  return false;
}

let answer = [];

lines.forEach((line) => {
  const range = line.split("-");
  const start = parseInt(range[0], 10);
  const end = parseInt(range[1], 10);
  for (let i = start; i <= end; i++) {
    const isValid = validateId(i);
    if (isValid) {
      answer.push(i);
    }
  }
});

console.log(
  "Puzzle answer:",
  answer.reduce((a, b) => a + b, 0)
);
