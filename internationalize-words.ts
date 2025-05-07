// Internationalize each word of the given sentence knowing that :

// - a word is a sequence of non-blank characters.
// - the internationalization of a word is the first letter of this word followed by the number of characters between the first and last letter of this word followed by the last letter of this word.
// - a word with less than or equal to 2 characters should not be internationalized

// Examples
// Input - Hello
// Output - H3o

// Input - He
// Output - He

// Input - Hello a 149
// Output - H3o a 119

const input = "hello at 14qw9";

const s: string = input
  .split(" ")
  .map((curr): string => {
    if (curr.length > 2) {
      const f = curr.slice(0, 1);
      const r = curr.slice(1, -1).length;
      const e = curr.slice(curr.length - 1);

      return f + r + e;
    } else {
      return curr;
    }
  })
  .join(" ");

console.log(s); // h3o at 139
