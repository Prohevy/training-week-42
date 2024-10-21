/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/
console.log("Task: A");

function createArray(n, m) {
    const array = [];
  
    for (let i = n; i <= m; i++) {
      array.push(i);
    }
  
    return array;
  }
  
  console.log("Task: A");
  console.log(createArray(5, 10));

/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

function createArray(n, m) {
    const array = [];
  
    for (let i = n; i <= m; i++) {
      array.push(i);
    }
  
    return array;
  }
  
  function combineArrays(array1, array2) {
    const combinedArray = [...array1]; 
  
    for (let i = 0; i < array2.length; i++) {
      if (!combinedArray.includes(array2[i])) {
        combinedArray.push(array2[i]);
      }
    }
  
    return combinedArray;
  }
  
  const array1 = createArray(5, 11);
  const array2 = createArray(8, 23);
  
  const combinedArray = combineArrays(array1, array2);
  
  console.log(combinedArray);





/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar chipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/
console.log("Task: C");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const message = "ckrr jutk"
let shift = 6

function decryptCaesar(message, alphabet, shift) {
    const decryptedMessage = [];
    const key = createKey(alphabet, shift);
  
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      
      if (alphabet.includes(char.toLowerCase())) {
        const charIndex = alphabet.indexOf(char.toLowerCase());
        const decryptedIndex = (charIndex - shift + alphabet.length) % alphabet.length;
        decryptedMessage.push(alphabet[decryptedIndex].toUpperCase() === char ? alphabet[decryptedIndex] : alphabet[decryptedIndex].toLowerCase());
      } else {
        
        decryptedMessage.push(char);
      }
    }
  
    return decryptedMessage.join('');
  }
  
  function createKey(alphabet, shift) {
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    return shiftedAlphabet;
  }
  
  console.log(decryptCaesar(message, ALPHABET, shift));



/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function findTwoNumbers(numbers, target) {
    const numberMap = new Map();
  
    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
  
      if (numberMap.has(complement)) {
        return [complement, numbers[i]];
      }
  
      numberMap.set(numbers[i], i);
    }
  
    return [];
  }
  




/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as inputt and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

function countDigits(number) {
    if (number === 0) {
      return 1; // Handle the special case of 0
    }
  
    let count = 0;
  
    while (number !== 0) {
      number = Math.floor(number / 10);
      count++;
    }
  
    return count;
  }
  
