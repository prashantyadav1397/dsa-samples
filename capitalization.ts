// Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result.

// Examples:
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str: string): string => {
    return str.split(' ').reduce((acc: string[], curr: string) => {
        const start = curr.charAt(0).toUpperCase();
        const rest = curr.slice(1);

        acc.push(start + rest)

        return acc;
    }, []).join(' ');
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));
