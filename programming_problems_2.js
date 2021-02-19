//Write a program that prints ‘Hello World’ to the screen.

function sayHi() {
  console.log("Hello World");
}

sayHi();

//Write a program that asks the user for their name and greets them with their name.

function greetings() {
  let name = prompt("Please enter your name");
  console.log("Hello " + name + ", Welcome!");
}

greetings();

//Modify the previous program such that only the users Alice and Bob are greeted with their names.

function selectiveGreet() {
  let name = prompt("Please enter your name");
  if (name === "Alice" || name === "Bob") {
    console.log("Hello " + name + ", Welcome!");
  } else {
    console.log("Welcome!");
  }
}

selectiveGreet();
