// Convert string to camel case
// Examples
// Input: - Hello World to all here
// Output - helloWorldToAllHere

const S: string = 'Hello World to all here'.split(' ').reduce((a, c, i) => {
    if (i === 0) {
        a += c.charAt(0).toLowerCase() + c.slice(1, c.length);
    } else {
        a += c.charAt(0).toUpperCase() + c.slice(1, c.length);
    }

    return a;
}, '');

console.log(S);
