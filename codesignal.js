//Write a function that returns the sum of two numbers.

// function add(param1, param2) {
//   let result = param1 + param2;

//   return result;
// }

// add(10, 8);

//Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// function centuryFromYear(year) {
//   let century = 0;
//   if (year % 100 === 0) {
//     century = Math.floor(year / 100);
//   } else {
//     century = Math.floor(year / 100) + 1;
//   }
//   return century;
// }

//centuryFromYear(1905);

//Given the string, check if it is a palindrome.
// function checkPalindrome(inputString) {
//   let chars = "";
//   let isPalindrome;
//   for (i = inputString.length - 1; i >= 0; i--) {
//     chars = chars + inputString[i];
//   }

//   if (chars === inputString) {
//     isPalindrome = true;
//   } else {
//     isPalindrome = false;
//   }

//   return isPalindrome;
// }

// checkPalindrome("aabaa");

//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// function adjacentElementsProduct(inputArray) {
//   let currentLargest = Number.MIN_SAFE_INTEGER;
//   for (i = 0; i < inputArray.length - 1; i++) {
//     let product = inputArray[i] * inputArray[i + 1];
//     console.log(product);
//     if (product > currentLargest) {
//       currentLargest = product;
//     }
//   }
//   return currentLargest;
// }

//adjacentElementsProduct([3, 6, -2, -5, 7, 3]);

//Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

function shapeArea(n) {
  let result = n * n + (n - 1) * (n - 1);
  return result;
}

//shapeArea(3);
