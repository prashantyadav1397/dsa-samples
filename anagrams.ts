// Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity.
// Only consider characters, not spaces or punctuation
// Consider capital letters to be the same as lower case

// Examples:

// anagrams('rail safety', 'fairy tales') === true
// anagrams('RAIL! SAFETY!', 'fairy tales') === true
// anagrams('Hi there', 'Bye there') === false

function cleanString(str: string) {
    return str.replace(/\W/g, '').toLowerCase();
}

function charMap(str: string) {
    return Array.from(str).reduce((acc: any, curr: string) => {
        const existing = acc[curr];

        if (existing) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }

        return acc
    }, {})
}

function anagrams(stringA: string, stringB: string) {
    stringA = cleanString(stringA)
    stringB = cleanString(stringB)

    const charMapA = charMap(stringA);
    const charMapB = charMap(stringB);

    const keysA = Object.keys(charMapA);
    const keysB = Object.keys(charMapB);

    if (keysA.length === keysB.length) {
        return keysA.every((keyA) => {
            const keyB = keysB.find((keyB) => keyB === keyA)
            if (keyB && (charMapA[keyA] === charMapB[keyB])) {
                return true;
            } else {
                return false;
            }
        })
    } else {
        return false
    }
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
