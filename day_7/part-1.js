const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

const start = lines[0].indexOf("S");
let beams = [start];
let answer = 0;

lines.forEach((line) => {
  let newBeams = [];
  let tmpBeams = beams;
  let splittedBeams = false;
  for (let i = 0; i < beams.length; i++) {
    if (line[beams[i]] === "^") {
      newBeams.push(beams[i] - 1, beams[i] + 1);
      tmpBeams = tmpBeams.filter((b) => b !== beams[i]);
      answer++;
      splittedBeams = true;
    }
  }
  if (splittedBeams) {
    beams = [...tmpBeams, ...newBeams];
    beams = [...new Set(beams)];
    beams.sort((a, b) => a - b);
  }
});

console.log("Puzzle answer:", answer);
