//Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.

for (let i = 2; i <= 20; i++){
    if (i%2 == 0){
        console.log(i);
        i++;
    }   
}

//Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.

let i = 0;
let sumWhile = 0;
while(i <= 100){
    sumWhile = sumWhile + i;
    i++
}
console.log(sumWhile);

//Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.

let number = [2, 5, 8, 9]; //sum = 24
let sum = 0;
for (let i = 0; i < number.length; i++){
    sum = sum + number[i];
}
console.log(sum);

