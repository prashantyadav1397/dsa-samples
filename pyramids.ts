// Pyramids
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides.

// Examples
// pyramid(1);
//      '#'

// pyramid(2);
//      ' # '
//      '###'

// pyramid(3);
//      '  #  '
//      ' ### '
//      '#####'


// Approach 1 =====================================================
// const pyramid = (n: number) => {
//     let charCount: number = 0;
//     let spaceCount: number = 0;

//     for (let i = 1; i <= n; i++) {
//         charCount = (2 * i) - 1;
//         spaceCount = n - i;

//         console.log(' '.repeat(spaceCount) + '#'.repeat(charCount) + ' '.repeat(spaceCount));
//     }
// }
// ================================================================

// Approach 2 =====================================================
const pyramid = (n: number) => {
    let mid: number = Math.floor((2 * (n - 1)) / 2);

    for (let row = 0; row < n; row++) {
        let str: string = '';

        for (let col = 0; col < 2 * n - 1; col++) {
            if (mid - row <= col && mid + row >= col) {
                str += '#';
            } else {
                str += ' ';
            }
        }

        console.log(str);
    }
}
// ================================================================

pyramid(3);
