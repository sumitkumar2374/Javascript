// JS Condition if_else_if_else ..

console.log("Hello I am conditional tutorial")


// here are the arithimatics operator's
let age = 1;
let grace = 2;

age += grace              // age = age + grace
console.log(age)
console.log(age + grace)  // addition 
console.log(age - grace)  // substract
console.log(age * grace)  // multiply
console.log(age / grace)  // division
console.log(age ** grace)  // ** ka mtlab h exponantial jo power wala hota h 
console.log(age % grace)   // % ka mtlab h modulo yane ki remainder milega 

/*
I am a 
multiline 
comment
*/

// if_else_if_else condition in js
if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}

// Ternary condition in js
a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/

// ye rha JS condition ka concept ..
console.log("Here are the concept of js condition")