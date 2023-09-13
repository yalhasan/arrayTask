//Q1
let myArray = [];

//Q2
myArray.push("apple");
myArray.push("banana");
myArray.push("cherry");

//Q3
console.log(myArray[0]);

//Q4
console.log(myArray[2]);

//Q5
myArray.unshift("mango");
//myArray[0] = "mango"; -- this switches between the elements
console.log(myArray);
//Q6
myArray.pop();

//Q7
let numbers = [5,10,15,20,25];
numbers.splice(2,1);
console.log(numbers);

//Q8
function arrayLength(a){
    return(a.length);
}
arrayLength(numbers);

//Q9
let temp = [72, 68, 74, 80, 76];
temp.sort();
console.log(temp[4]);

//Q10
console.log(myArray.includes("banana"));