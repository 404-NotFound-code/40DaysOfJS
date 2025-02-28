// Task 01: Output this code snippet

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// Output: It's a normal day.

// Task 02: ATM cash withdrawal system

let amountToWithdraw = 3000;

if (amountToWithdraw%100 == 0){
    console.log("Withdrawal successful");
} else{
    console.log("Invalid amount");
}

// Task 03: Calculator using switch-case

let operator = "+";
let num1 = 10, num2 = 5;

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid Operator");
}

// Task 04: Pay your movie ticket

let age = 15;

if (age < 10) {
    console.log("You are a children. Your ticket price is $3");
} else if (age > 12 && age < 60) {
    console.log("You are an adult. Your ticket price is $10");   
} else if (age > 60){
    console.log("You are Senior. Your ticket price is $8");
} else{
    console.log("Invalid age");
}

// Task 05: Horoscope sign checker

let birthMonth = 'December';

switch (birthMonth) {
    case "January":
        console.log("Capricorn, Aquarius");
        break;
    case "February":
        console.log("Aquarius, Pisces");
        break;
    case "March":
        console.log("Pisces, Aries");
        break;
    case "April":
        console.log("Aries, Taurus");
        break;
    case "May":
        console.log("Taurus, Gemini");
        break;
    case "June":
        console.log("Gemini, Cancer");
        break;
    case "July":
        console.log("Cancer, Leo");
        break;
    case "August":
        console.log("Leo, Virgo");
        break;
    case "September":
        console.log("Virgo, Libra");
        break;
    case "October":
        console.log("Libra, Scorpio");
        break;
    case "November":
        console.log("Scorpio, Sagittarius");
        break;
    case "December":
        console.log("Sagittarius, Capricorn");
        break;

    default:
        console.log("Invalid month");
}

// Task 06: Which triangle

let equalSides = 2;

switch(equalSides){
    case 0:
        console.log("Scalene Triangle");
        break;
    case 2:
        console.log("Isosceles Triangle");
        break;
    case 3:
        console.log("Equilateral Triangle");
        break;
    default:
        console.log("Invalid side number");
}
