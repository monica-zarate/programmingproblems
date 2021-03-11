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

// function game() {
//   let strInput = prompt(
//     "Let's play! We have an integer number between 1 and 99. Can you guess the number?"
//   );
//   let input = parseInt(strInput);
//   const number = 88;
//   let tries = 1;

//   while (input !== number) {
//     if (input < number) {
//       let newStrInput = prompt("Your number is smaller. Try again!");
//       let newInput = parseInt(newStrInput);
//       input = newInput;
//     } else {
//       let newStrInput = prompt("Your number is larger. Try again!");
//       let newInput = parseInt(newStrInput);
//       input = newInput;
//     }
//     tries = tries + 1;
//   }
//   alert(
//     "You have guessed correctly! You tried " +
//       tries +
//       " times before guessing the correct number."
//   );
// }

//game();

//Write a program that prints the next 20 leap years.
// function leap() {
//   let nextTwenty = [];
//   let lastLeap = 2020;

//   while (nextTwenty.length < 20) {
//     lastLeap = lastLeap + 4;
//     if (lastLeap % 4 !== 0) {
//       console.log("Common year");
//     } else if (lastLeap % 100 !== 0) {
//       nextTwenty.push(lastLeap);
//     } else if (lastLeap % 400 !== 0) {
//       console.log("Commor year");
//     } else {
//       nextTwenty.push(lastLeap);
//     }
//   }
//   console.log("The next 20 leap years will be: " + nextTwenty);
// }

//leap();

//Write a program that swaps values of variables.
// let a = "<xxxxxx>";
// let b = "<yyyyyy>";
// let temp;

// function swap(one, two) {
//   console.log("Var `a` is: " + one);
//   console.log("Var `b` is: " + two);

//   temp = one;
//   one = two;
//   two = temp;

//   console.log("Var `a` is now: " + one);
//   console.log("Var `b` is now: " + two);
// }

//swap(a, b);

//Write a function that sorts a list using the Bubble Sort Algorithm
// function bubble(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

//bubble([5, 2, 4, 3]);

//Write a function that calculates the area of a geometric shape. The user can select one of four different options available.

// function square(side) {
//   let result = side * side;
//   return "The square's area is: " + result;
// }

// function rectangle(width, height) {
//   let result = width * height;
//   return "The rectangle's area is: " + result;
// }

// function triangle(base, height) {
//   let result = (base * height) / 2;
//   return "The triangle's area is: " + result;
// }

// function circle(radius) {
//   const pi = 3.1415;
//   let result = pi * (radius * radius);
//   return "The circle's area is: " + result;
// }

// function area() {
//   let input = prompt(
//     "Enter the name of the geometric shape you wish to calculate the area of, in lower cases. Available options are: Square, Rectangle, Triangle and Circle."
//   );
//   let result;

//   if (input === "square") {
//     let sideString = prompt("Please enter the square's side length in cms");
//     let side = parseInt(sideString);
//     result = square(side);
//     console.log(result);
//   } else if (input === "rectangle") {
//     let widthString = prompt(
//       "Please enter the rectangle's width length in cms"
//     );
//     let width = parseInt(widthString);
//     let heightString = prompt(
//       "Please enter the rectangle's height length in cms"
//     );
//     let height = parseInt(heightString);
//     result = rectangle(width, height);
//     console.log(result);
//   } else if (input === "triangle") {
//     let baseString = prompt("Please enter the triangle's base length in cms");
//     let base = parseInt(baseString);
//     let heightString = prompt(
//       "Please enter the triangle's height length in cms"
//     );
//     let height = parseInt(heightString);
//     result = triangle(base, height);
//     console.log(result);
//   } else if (input === "circle") {
//     let radiusString = prompt("Please enter the circle's radius length in cms");
//     let radius = parseInt(radiusString);
//     result = circle(radius);
//     console.log(result);
//   } else {
//     let sndTry = prompt("Your selection is not supported, please try again");
//     input = sndTry;
//   }
// }

//area();

//Write two functions. First one adds the user's input to an array. Second function sorts that array using the selection sort algorithm.

// let list = [];

// function add() {
//   let number = document.getElementById("input").value;
//   list.push(number);
//   let input = document.getElementById("input");
//   input.value = "";
// }

// function request() {
//   let display = document.getElementById("display");
//   let sortedArray = sort(list);
//   let displayArray = sortedArray.toString();
//   display.innerText = displayArray;
// }

// function sort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let smaller = i;
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[smaller]) {
//         smaller = j;
//       }
//     }
//     if (smaller != i) {
//       let temp = arr[i];
//       arr[i] = arr[smaller];
//       arr[smaller] = temp;
//     }
//   }
//   return arr;
// }

function fizzbuzz(n) {
  for (i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " - Fizz Buzz");
    } else if (i % 5 === 0) {
      console.log(i + " - Buzz");
    } else if (i % 3 === 0) {
      console.log(i + " - Fizz");
    } else {
      console.log(i);
    }
  }
}

//fizzbuzz(21);

function mutateTheArray(n, a) {
  let b = [];

  for (i = 0; i < n; i++) {
    if (i === 0) {
      b.push(0 + a[0] + a[1]);
    } else if (i === n - 1) {
      b.push(a[i - 1] + a[i] + 0);
    } else {
      b.push(a[i - 1] + a[i] + a[i + 1]);
    }
  }
  return b;
}

//mutateTheArray(5, [4, 0, 1, -2, 3]);
