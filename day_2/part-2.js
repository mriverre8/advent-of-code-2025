const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(",");

function validateId(id) {
  const idStr = id.toString();
  for (let i = 0; i < idStr.length; i++) {
    let isValid = true;
    const splitChar = idStr.substring(0, i + 1);
    if (splitChar.length === idStr.length) {
      break;
    }
    const splitValue = idStr.split(splitChar);
    splitValue.map((val) => {
      if (val.length != 0) {
        isValid = false;
      }
    });
    if (isValid) {
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
