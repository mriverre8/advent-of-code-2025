const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

function rotate(direction, steps) {
  if (direction === "R") {
    return (start + steps) % 100;
  } else if (direction === "L") {
    return (start - steps) % 100;
  }
}

let start = 50;
let answer = 0;

for (let i = 0; i < lines.length; i++) {
  const rotation = lines[i];
  const result = rotate(rotation[0], parseInt(rotation.slice(1), 10));
  start = result;
  if (result === 0) {
    answer++;
  }
}

console.log("Puzzle answer:", answer);
