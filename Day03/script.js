// Task 01: Odd or even?

let number = 50;
let result;

result = number%2 == 0 ? console.log(number, 'even number') : console.log(number, 'odd number');

// Task 02: Do you have a driving licence?

let age = 20;
let elligibility;

elligibility = age >= 18 ? console.log(age, 'elligible') : console.log(age, 'not elligible');

// Task 03: Calculate CTC with a bonus

let salaryPerMonth = 12300;
let annualSalary = salaryPerMonth * 12;
let bonus = 20;
let totalSalary = annualSalary + (annualSalary * (bonus/100));

console.log(totalSalary); 

// Task 04: Traffic light simulation

let color;
color = 'Green';

color == "Red" ? console.log('STOP') : color == 'Green' ? console.log('GO') : console.log('STOP');

// Task 05: Electricity Bill Calculator

let units = 10;

let monthlyBill = units * 30 * 150;

let annualBill = monthlyBill * 12;

let discount = 100 - 20;

let totalBill = annualBill + (annualBill * (discount/100))

console.log(totalBill);

// Task 06: Leap year checker

let year = 2024;

(year%4 == 0) ? console.log(year, 'is leap year') : (year%100 != 0 && year%400 == 0) ? console.log(year, 'is leap year') : console.log(year, 'is not leap year');


// Task 07: Max of three numbers

let p = 704, q = 845, r = 923;

(p > q && p > r) ? console.log(p, 'is max number') : (q > p && q > r) ? console.log(q, 'is max number') : console.log(r, 'is max number');

// Task 08: Bitwise doubling

let count = 5; // 00000101 (5)
console.log(count << 1); // 00001010 (10)