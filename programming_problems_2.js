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
// function multiplication() {
//   let result = 0;
//   for (i = 1; i <= 12; i++) {
//     for (j = 1; j <= 12; j++) {
//       result = i * j;
//       console.log(result);
//     }
//   }
// }

//multiplication();

//Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed.

function game() {
  let strInput = prompt(
    "Let's play! We have an integer number between 1 and 99. Can you guess the number?"
  );
  let input = parseInt(strInput);
  const number = 88;
  let tries = 1;

  while (input !== number) {
    if (input < number) {
      let newStrInput = prompt("Your number is smaller. Try again!");
      let newInput = parseInt(newStrInput);
      input = newInput;
    } else {
      let newStrInput = prompt("Your number is larger. Try again!");
      let newInput = parseInt(newStrInput);
      input = newInput;
    }
    tries = tries + 1;
  }
  alert(
    "You have guessed correctly! You tried " +
      tries +
      " times before guessing the correct number."
  );
}

//game();

//Write a program that prints the next 20 leap years.
function leap() {
  let nextTwenty = [];
  let lastLeap = 2020;

  while (nextTwenty.length < 20) {
    lastLeap = lastLeap + 4;
    if (lastLeap % 4 !== 0) {
      console.log("Common year");
    } else if (lastLeap % 100 !== 0) {
      nextTwenty.push(lastLeap);
    } else if (lastLeap % 400 !== 0) {
      console.log("Commor year");
    } else {
      nextTwenty.push(lastLeap);
    }
  }
  console.log("The next 20 leap years will be: " + nextTwenty);
}

//leap();
