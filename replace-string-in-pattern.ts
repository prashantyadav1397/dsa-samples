// string replacement in pattern and maintain string length

var inputs: string[] = ["3", "5"];
const w: number = parseInt(inputs[0]);
const l: number = parseInt(inputs[1]);
const word1: string[] = "a bb ccc".split(" ");
const word2: string[] = "1 11 111".split(" ");
const line1 = `............
.x..........
.....x......
........x...
............`;
const line2 = `............
.........x..
........x...
.......x....
............`;

[
  { line: line1, word: word1 },
  { line: line2, word: word2 },
].map(({ line, word }) => {
  const text: string[] = line.split("\n");
  const len = text[0].length;
  for (let i = 0; i < w; i++) {
    text[i + 1] = text[i + 1].replace("x", word[i]);

    if (text[i + 1].length > len) {
      text[i + 1] = text[i + 1].slice(0, -(text[i + 1].length - len));
    }
  }
  console.log(text.join("\n"));
});

// Outputs
// ............
// .a..........
// .....bb.....
// ........ccc.
// ............

// ............
// .........1..
// ........11..
// .......111..
// ............
