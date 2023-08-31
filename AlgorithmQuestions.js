
// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 


// TASK 1 


function isPalindrome(str) {
  str = str.toLowerCase(); // Convert the string to lowercase
  str = str.replace(/\s/g, ""); // Remove spaces from the string
  return str === str.split("").reverse().join(""); // Compare the string with its reverse
}


// const isPalindrome  = (word) => {
//   return true 
// }

console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalisndrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // TRUE
console.log(isPalindrome("ark")) // TRUE
console.log(isPalindrome("aa")) // TRUE



// TASK 2
function findMissingNumber(arr) {
    const seenNumbers = new Set();
  
    for (const num of arr) {
      if (typeof num !== 'number' || num < 1) {
        return num < 0 ? 'Invalid input, negative number detected' : 'Invalid input, non-numeric value detected';
      }
  
      seenNumbers.add(num);
    }
  
    const n = arr.length + 1;
    for (let i = 1; i <= n; i++) {
      if (!seenNumbers.has(i)) {
        return `Missing = ${i}`;
      }
    }
  
    return 'Nothing is missing';
  }
  

//  const isMissing = (arrayInput) => {
//     const missing = 0
//     return `${missing} is missing`
// }


console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, non-numeric value detected 
console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // THROW ERROR Invalid input, non-numeric value detected
