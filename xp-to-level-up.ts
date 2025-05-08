/**
 * The Gamer adapts himself to the new experience system. To stand a chance against the top end tier gamers, he now needs to solve puzzles.
 * The Gamer solves puzzles for a total of 300xp per puzzles.
 * The xp needed to reach the next level is ( CurrentLevel * Sqrt(CurrentLevel) * 10 ), rounded down.
 * You're given the current Level and XP needed for The Gamer to level up. Your goal is to find out what these stats will be after he solves N puzzles.
 */

// Input 1
// 10
// 300
// 1
// Output 1
// 11
// 364

// Input 2
// 1
// 10
// 5
// Output 2
// 11
// 287

let level: number = 1; // An integer Level for the current level The Gamer has reached.
let xp: number = 10; // An integer Xp for how much xp The Gamer needs to level up.
const N: number = 5; // An integer N for how many puzzles did The Gamer solve.
let xpInc = N * 300;

while (xpInc >= xp) {
  xpInc -= xp;
  level += 1;
  xp = Math.floor(level * 10 * Math.sqrt(level));
}

console.log(level); // The level The Gamer has reached
console.log(xp - xpInc); // How much xp The Gamer needs to reach the next level.
