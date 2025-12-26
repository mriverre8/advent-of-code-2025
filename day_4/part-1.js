const fs = require("fs");

const content = fs.readFileSync("input.txt", "utf8");
const lines = content.split(/\r?\n/);

const EMPTY = ".";

let answer = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === "@") {
      const upL = lines[i - 1] ? lines[i - 1][j - 1] || EMPTY : EMPTY;
      const up = lines[i - 1] ? lines[i - 1][j] || EMPTY : EMPTY;
      const upR = lines[i - 1] ? lines[i - 1][j + 1] || EMPTY : EMPTY;
      const left = line[j - 1] || EMPTY;
      const right = line[j + 1] || EMPTY;
      const downL = lines[i + 1] ? lines[i + 1][j - 1] || EMPTY : EMPTY;
      const down = lines[i + 1] ? lines[i + 1][j] || EMPTY : EMPTY;
      const downR = lines[i + 1] ? lines[i + 1][j + 1] || EMPTY : EMPTY;

      const neighbors = [upL, up, upR, left, right, downL, down, downR];

      const howManyRolls = neighbors.reduce((acc, curr) => {
        if (curr === "@") {
          return acc + 1;
        }
        return acc;
      }, 0);

      if (howManyRolls < 4) {
        answer += 1;
      }
    }
  }
}

console.log("Puzzle answer:", answer);
