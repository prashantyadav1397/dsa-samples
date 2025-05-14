// Given an integer, n, you must discern if it is a Disarium Number.

// Disarium Numbers are numbers where the sum of each digit raised to the power of its place in the number (read from left to right) is equal to the number itself.

// An example of this is the number 135:

// There is a 1 in the first place.
// There is a 3 in the second place.
// There is a 5 in the third place.

// (1^1 + 3^2 + 5^3) = 135
// Input
// Line 1: An integer, n.
// Output
// Line 1: Either Yes, n is a Disarium Number. or No, n is not a Disarium Number.

// 89
// 518
// 135
// 80

// Approach 1 =============================================
const n: number = 135;
const num = +Array.from(n.toString()).reduce(
  (acc: number, curr: string, index: number) => {
    acc = acc + parseInt(curr) ** (index + 1);

    return acc;
  },
  0
);
// ========================================================

// Approach 2 =============================================
// function separateDigits(n: number): number[] {
//   let arr: number[] = [];
//   let lastDigit: number;

//   do {
//     lastDigit = n % 10;
//     arr.push(lastDigit);
//     // Updating num to num/10 cuts off the last digit:
//     n = Math.trunc(n / 10);
//   } while (n !== 0);

//   return arr.reverse();
// }

// let n = 135;
// const num = separateDigits(n).reduce(
//   (acc: number, curr: number, index: number) => {
//     acc = acc + curr ** (index + 1);

//     return acc;
//   },
//   0
// );
// ========================================================

num === n
  ? console.log(`Yes, ${n} is a Disarium Number.`)
  : console.log(`No, ${n} is not a Disarium Number.`);
