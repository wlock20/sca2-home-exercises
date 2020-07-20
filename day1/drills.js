const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
 var splitString = str.split("");
 var reversedArray = splitString.reverse();
 var joinArray = reversedArray.join("");
 return joinArray;
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  let product = 1;
  for ( i = 1; i<num + 1; i++)
  {
    product = i * product
  };
  return(product);
}

//const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  //const d = new Date();
  //const month = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
 // const day = d.getDay();
  
  //console.log(month[d.getMonth()] + " " + day+"th");
//}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let backupArr = [];
  let splitArr = str.split("");
  for ( i = 1; i<num+1; i++)
  {
    backupArr[i] = splitArr.pop();
  }
  let backReverse = backupArr.reverse();
  let joinBack = backReverse.join("");
  let joinSplit = splitArr.join("");
  let complete = joinBack + joinSplit;
  return(complete);
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  let sentenceSplit = str.Split(" ");
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
}

// Write tests here:

assert(reverse("3df") === "fd3");
console.log(reverse("3df"));
assert(factorial(5)===120);
assert(shiftRight("hello",3)==="llohe");
assert(shiftRight("hello",2)==="lohel");
//console.log(shiftRight("hello",3));
//announceDate();



