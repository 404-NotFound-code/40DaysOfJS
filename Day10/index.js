// Task 01: Output and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

// The output of the following code is: Bob
// task01.png

// Task 02: Find mistake

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// The output of the following code is: 15
// The very big mistake is the 'total' variable declared globally. If I change the 'total' variable before console, then it will immediately change.

// Task 03: Create a function with a nested function and log a variable from the parent function

function func1(){
    let msg = 'hello javascript';

    function func2(){
        console.log(msg);
    }

    func2();
}

func1();

// Output: hello javascript

// Task 04: Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function myFunc(){
    for(let i = 0; i <= 2; i++){
        let title = '40 days of js';
    }
}

// myFunc();

// console.log(title); // ReferenceError
// When we declare a variable inside curly braces which might be function, loops, if-else etc. Then those variables cannot access outside because of function scope and block scope.

// Task 05: Write a function that tries to access a variable declared inside another funciton.

function demoFunc(){
    let demoTxt = 'hello world 2025';
}

function printDemoFunc(){
    console.log(demoTxt);
}

// printDemoFunc(); // ReferenceError

// The 'demoTxt' variable initialized in a function called 'demoFunc'. We cannot declare this variable from another function because the variable declared with let are both function and block scope.

// Task 06: Output and why?

// console.log(a); // ReferenceError
let a = 10; 

// Try to acess 'a' before initialization throws an error because of variable hoisting.

// Task 07: Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age); // It will cause an error

// The 'age' variable is accessible only inside showAge() which is option B.


// Task 08: Output and why?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// Output: Hi
// We initialize 'message' variable globally. But in outer() the 'message' variable again intialized with another value with it's scope. When inner() function call, the flows of code find 'message' variable and if it not find, then the flow of code one step upper and find again and when it find the value, it print the value 'Hi'. It is happen because of scope chain.

// Task 09: Output and why?

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

// Output: Inner

// The reason of the output in the following code is scope chain. We initialize 'x' variable globally. But in outer(), the 'x' variable again intialized with another value with it's scope. In inner(), the 'x' variable again initialized with another value with it's scope. When inner() function call, the flows of code find 'x' variable within it's scope and when it find the value, it print the value 'Inner'.

// Task 10: Output and why?

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2

// Here, we return function inside another function, where the inner function access any variable of outer function.

