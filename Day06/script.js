// Task 01: Convert celcius to fahrenheit

function celciusToFahrenheit(celcius){
    const formula = (celcius * (9/5)) + 32;
    return formula;
}

console.log(celciusToFahrenheit(46)); // 114.8

// Task 02: Find the maximum of two numbers

function findMax(num1, num2){
    let maxNum;

    if(num1 > num2){
        maxNum = num1;
    } else{
        maxNum = num2;
    }

    return maxNum;
}

console.log(findMax(1,2)); // 2
console.log(findMax(-1,-2)); // -1

// Task 03: Check if a string is a palindrome

// madam
// 01234
// i i+1 i+2 i+3 i+4

function isPalindrome(str){

    let i = 0;
    let palindrome;
    if((str[i] === str[str.length - 1]) && (str[i+1] === str[str.length - 2]) && (str[i+2] === str[str.length - 3]) && (str[i+3] === str[str.length - 4]) && (str[i+4] === str[str.length - 5])){
        palindrome = true;
    } else {
        palindrome = false;
    }

    return palindrome;
}

console.log(isPalindrome('pop')); // true
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('utyu'));  // false

// Task 04: Find factorial of a number

// 5! = 5x4x3x2x1  
//    = nx(n-1)x(n-2)x(n-3)x(n-4)

function factorial(n){

    let factorialAns;
    if(n == 0 || n == 1){
        factorialAns = 1;
    } else{
        factorialAns = n * factorial(n-1);
    }

    return factorialAns;
}

console.log(factorial(5));

// Task 05: Count vowels in a string

function countVowels(str){
    
    let toLowerStr = str.toLowerCase();
    let vowelsNum = 0;
    let vowels = 'aeiou';

    for(let i = 0; i < toLowerStr.length; i++){
        let check = vowels.includes(toLowerStr[i]);
        vowelsNum += check;
    }
    
    return vowelsNum;
}

console.log(countVowels('Javascript is the best language')); // 10

// Task 06: Capitalize the first letter of each word in a sentence

function capitalizeWords(sentence){
    let capitalizeLetter = true;
    let updatedSentence = "";

    for (let i = 0; i < sentence.length; i++){
        if(sentence[i] === " "){
            capitalizeLetter = true;
            updatedSentence += " ";
        } else if(capitalizeLetter){
            updatedSentence += sentence[i].toUpperCase(); 
            capitalizeLetter = false;
        } else{
            updatedSentence += sentence[i];
        }
    }
    return updatedSentence;
}

console.log(capitalizeWords('Javascript is best for web development'));


// Task 07: Use an IIFE to print "Hello, JavaScript!"

(function(){
    console.log("Hello, JavaScript!");
})();

// Task 08: Create a simple callback function

let thisIsCallBack = true;
function callBack(func){
    console.log('This is a call back function');
    
    if(thisIsCallBack){
        func();
    }
}

callBack(function (){
    console.log('hello world');
})

// Task 09: Call stack execution diagram 

function f1() {}
function f2() {
    f1();
}
f2();

// The diagram attached in task09.excalidraw file

// Task 10: Call stack execution diagram 

function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();

// The diagram attached in task10.excalidraw file