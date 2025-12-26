const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

let start = 50;
let answer = 0;

for (let i = 0; i < lines.length; i++) {
  const rotation = lines[i];
  const direction = rotation[0];
  const steps = parseInt(rotation.slice(1), 10);
  if (direction === "R") {
    start = (start + steps) % 100;
  } else if (direction === "L") {
    start = (start - steps) % 100;
  }
  if (start === 0) {
    answer++;
  }
}

console.log("Puzzle answer:", answer);
