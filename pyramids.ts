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
// const pyramid = (n: number) => {
//     const mid: number = Math.floor((2 * (n - 1)) / 2);

//     for (let row = 0; row < n; row++) {
//         let str: string = '';

//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (mid - row <= col && mid + row >= col) {
//                 str += '#';
//             } else {
//                 str += ' ';
//             }
//         }

//         console.log(str);
//     }
// }
// ================================================================

// Approach 3 =====================================================
const pyramid = (n: number, row: number = 0, str: string = '') => {
    if (row === n) {
        return;
    }

    if (str.length === 2 * n - 1) {
        console.log(str);

        return pyramid(n, row + 1);
    }

    const mid: number = Math.floor((2 * (n - 1)) / 2);
    let character: string = '';

    if (mid - row <= str.length && mid + row >= str.length) {
        character = '#';
    } else {
        character = ' ';
    }

    return pyramid(n, row, str + character);
}
// ================================================================

pyramid(3);
