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

const input = "hello a 149";

const s: string = input
  .split(" ")
  .map((curr): string => {
    if (curr.length > 1) {
      const f = curr.slice(0, 1);
      const r = curr.slice(1, curr.length - 1).length;
      const e = curr.slice(curr.length - 1, curr.length);

      return r === 0 ? [f, e].join("") : [f, r, e].join("");
    } else {
      return curr;
    }
  })
  .join(" ");

console.log(s); // h3o a 119
