// Factorial in js

// jis number ka factorial chahiye
let n = 5;
let fact = 1;

// for for condition's
for (let i = 1; i <= n; i++) {
    fact = fact * i;
}

// print factorial
console.log("Factorial is:", fact);

// method --> 2 using recursion
function factorial(n) {
    if (n === 1) {
        return 1;   // base case
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Method's -->3 for factorials using Reduce method..
let a = 7

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))