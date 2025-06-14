// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

// Example
// password = 2bbbb
// This password is 5 characters long and is missing an uppercase and a special character. The minimum number of characters to add is 2.

// password = 2bb#A
// This password is 5 characters long and has at least one of each character type. The minimum number of characters to add is 1.

function minimumNumber(n: number, password: string): number {
    let dCount = 0;
    let lCount = 0;
    let uCount = 0;
    let sCount = 0;
    let reqLen = 0;
    for(let i=0; i<n;i++){
        if(/[\d]/g.test(password.charAt(i))){
            dCount++;
        }
        if(/[a-z]/g.test(password.charAt(i))){
            lCount++;
        }
        if(/[A-Z]/g.test(password.charAt(i))){
            uCount++;
        }
        if(/[!@#$%^&*()+-]/g.test(password.charAt(i))){
            sCount++;
        }
    }
    
    if(dCount === 0){
        reqLen++;
    }
    if(lCount === 0){
        reqLen++;
    }
    if(uCount === 0){
        reqLen++;
    }
    if(sCount === 0){
        reqLen++;
    }
    
    if(n+reqLen < 6){
        reqLen+= 6 - (n+reqLen);
    }
    
    return reqLen;
}

console.log(minimumNumber(7, 'AUzs-nV'));
console.log(minimumNumber(5, '2bbbb'));
console.log(minimumNumber(5, '2bb#A'));
