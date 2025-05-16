// In a town there are X men, each man has X wives and each wife has X kids, you should print the total T number of people in this town.

// Input
// One line: The integer X

// Output
// One line: The total T number of people in this town

// Constraints
// 0 ≤ X ≤ 300

const x: number = parseInt(readline());
let m = x;
let w = x * m;
let k = x * w
console.log(m+w+k);

//Input - 7, Output - 399
//Input - 2, Output - 14
