// 1. Declare a variable called myName. 
//  - Give it the value of your name. 
//  - This is a string so the value should be in quotes ""
const myName = "Vincent";


// 2. Declare a variable called age. 
//  - Give it the value of your age. 
//  - This is a number, so the value does not have to be in quotes
const age = 17;

// 3. Declare a variable called answer.
//  - This should save the div with a class of `answer`
const answer = document.querySelector(".answer");
// console.log(answer);

// 4. When you're done, remove the comment from the code below.

answer.innerHTML = myName + " is " + age;
