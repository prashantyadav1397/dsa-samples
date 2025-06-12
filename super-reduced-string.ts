// Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.
// Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

// Example.
// s = 'aab'
// aab shortens to b in one operation: remove the adjacent a characters.

// s = 'abba'
// Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.


// Approach 1 ===========================================
// function superReducedString(s: string): string {
//     const sArr = s.split('');
//     let matchFound = false;
    
//     for(let i=0; i<sArr.length; i++){
//         if(sArr[i] === sArr[i+1]){
//             sArr.splice(i,2);
//             matchFound = true;
//         }
//     }

//     if(!matchFound){
//         return s.length === 0 ? 'Empty String': s;
//     }
    
//     return superReducedString(sArr.join(''));
// }
// ======================================================

// Approach 2 ===========================================
function superReducedString(s: string): string {
    const store: string[] = [];
    for (const char of s){
        if(store.length > 0 && store[store.length -1] === char){
            store.pop();
        }else{
            store.push(char);
        }
    }
    
    return store.length === 0 ? 'Empty String' : store.join('')
}
// ======================================================

console.log(superReducedString('aaabbddcsa'));
console.log(superReducedString('abba'));
