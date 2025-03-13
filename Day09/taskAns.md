## Task 01: Explain TDZ by creating 3 variables in side a block

```javascript

{
    // firstName TDZ started here
    console.log(firstName);

    var firstName = 'Java'; // firstName TDZ ends here

    // lastName TDZ started here
    console.log(lastName);

    var lastName = 'Script'; // lastName TDZ ends here

    // userName TDZ is started here
    console.log(userName);

    let userName = 'JavaScript'; // userName TDZ is ends here
}

```
### Temporal Dead Zone or TDZ is something like a area or any block in JavaScript source code that cannot permit to access a variable until it is initialized.

### Explanation: 
- In the following code, the variable firstName, lastName and userName are hoisted until initialization 
- To access variable before initialization, for var it outputs is 'undefined' and for let it outputs is an error called 'ReferenceError'. 
- For firstName, lastName & userName, TDZ is started when to access and end when the variable initialization completed. 

## Task 02: Explain variable and function hoisting

### var, let and const hoisting 

### Hoisting means the memory for your function or variable. The phase where you are creating memory for your variable is variable hoisting and the phase where you are creating memory for your function and do the basic initializaiton is called as function hoisting.

```javascript
    console.log(number);
    var number;
    number = 10;
    console.log(number)
```
### Explanation:
- For 'var' the memory will be created for that variable and it will be initialized with something called 'undefined' in creation phase.
- In execution phase, number is initialized with 10

```javascript
    console.log(number);
    let number;
    number = 10;
    console.log(number)
```

### Explanation:
- In case of 'let', the variable memory will be created but it is not going to be initialized with anything as a raw material in creation phase.
- In execution phase, number is initialized with 10 but throw 'ReferenceError' because number will be executed before initialization.

```javascript
    console.log(number);
    const number = 10;
    console.log(number)
```

### Explanation:
- For 'const', the variable is initialize when declare. 
- Cannot access 'number' because we want to access before declaration.

### Function hoisting

```javascript
test();

var test = function() {
  console.log('I am being tested');
}
```

### Explanation:
- Here, test() function is hoisted because test() is invoked or called before defining.