// Task 01: Pyramid pattern using nested loops

/*
* 
* *
* * *
* * * *
* * * * *
*/

for (let i = 1; i <= 5; i++){
	let char = "";
	for (let j = 1; j <= i; j++){
		char += "* ";
	}
	console.log(char);
}


// Task 02: Create multiplication table (using for loop)

let n = 3;

for(let i = 1; i <= 10; i++){
    console.log(n, 'x', i, '=', n*i);
}

// Task 03: Summation of all odd numbers between 1 to 500

let sum = 0;
for (let i = 1; i <= 500; i += 2){
	if (i % 2 != 0){
		sum += i;
	}
}

console.log("Sum of all odd numbers between 1 to 500 is", sum); // 62500

// Task 04: Skipping multiples of 3

for (let n = 1; n <= 20; n++){
	if (n % 3 === 0){
		continue;
	}
	console.log(n);
}

// Task 05: Reverse digit of a number (using while loop)

let number = 6789;
let reverseNumber = 0;

while (number > 0){
	let remainder;

	remainder = number % 10;
	number = Math.floor(number / 10);

	reverseNumber = reverseNumber * 10 + remainder;
}

console.log(reverseNumber);

// Task 06: Understanding on the differences between for, while and do-while loop

// for loop which is a control flow statement for specifying iteration. It also use for fixed iteratiod.

// while loop which is a control flow statement that you don't know how many time you use it.

// do while loop is a loop which execute atleast once without checking the condition.
