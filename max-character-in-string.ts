// Coding Exercise - Max Chars
// Given a string, return the character that is most commonly used in the string.

// Examples:

//  maxChar("abcccccccd") === "c"
//  maxChar("apple 1231111") === "1"

function maxChar(str: string) {
    const arr = Array.from(str).reduce((acc: any, curr: string) => {
        const existing = acc[curr];

        if (existing) {
            acc[curr]++;
        }
        else {
            acc[curr] = 1;
        }

        return acc;
    }, {});

    const keys = Object.keys(arr);
    let charMax = keys[0];
    let maxCount = arr[keys[0]];

    for (const key of keys) {
        if (arr[key] > maxCount) {
            maxCount = arr[key];
            charMax = key;
        }
    }

    return charMax;
}

console.log(maxChar('abcccccccd'))
console.log(maxChar('apple 1231111'))
