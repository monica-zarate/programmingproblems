//Write a program that prints ‘Hello World’ to the screen.

// function sayHi() {
//   console.log("Hello World");
// }

// sayHi();

//Write a program that asks the user for their name and greets them with their name.

// function greetings() {
//   let name = prompt("Please enter your name");
//   console.log("Hello " + name + ", Welcome!");
// }

// greetings();

//Modify the previous program such that only the users Alice and Bob are greeted with their names.

// function selectiveGreet() {
//   let name = prompt("Please enter your name");
//   if (name === "Alice" || name === "Bob") {
//     console.log("Hello " + name + ", Welcome!");
//   } else {
//     console.log("Welcome!");
//   }
// }

// selectiveGreet();

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// function sum() {
//   let stringNumber = prompt("Please enter an integer number");
//   let number = parseInt(stringNumber);
//   let result = 0;
//   for (i = 1; i <= number; i++) {
//     result = result + i;
//   }
//   console.log(result);
// }

//sum();

//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

// function multiplesSum() {
//   let stringNumber = prompt("Please enter an integer number");
//   let number = parseInt(stringNumber);
//   let result = 0;
//   for (i = 1; i <= number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result = result + i;
//     }
//   }
//   console.log(result);
// }

//multiplesSum();

//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

// function select() {
//   let stringNumber = document.getElementById("int-input").value;
//   let number = parseInt(stringNumber);
//   let result = 0;
//   let operations = document.getElementById("operation");
//   let printResult = document.getElementById("result");
//   let value = operations.value;

//   if (value === "sum") {
//     for (i = 1; i <= number; i++) {
//       result = result + i;
//     }
//     printResult.innerHTML = result;
//   } else if (value === "product") {
//     result = 1;
//     for (i = 1; i <= number; i++) {
//       result = result * i;
//     }
//     printResult.innerHTML = result;
//   }
// }

//Write a program that prints a multiplication table for numbers up to 12.
function multiplication() {
  let result = 0;
  for (i = 1; i <= 12; i++) {
    for (j = 1; j <= 12; j++) {
      result = i * j;
      console.log(result);
    }
  }
}

//multiplication();
