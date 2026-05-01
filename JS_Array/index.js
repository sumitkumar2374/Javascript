// Array in js

let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

// value change in 0 index 
arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)

// print index values
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// array function
console.log(arr.toString())
console.log(arr.join(" and "))


// splice in arr
let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 

// kuch arr ka operation
let arr = ["apple", "banana", "mango"];

console.log(arr[1]); // banana

// push & unshift for add 
arr.push("orange");    // end me add
arr.unshift("grape");  // start me add

// remove elements in arr using pop & shift
arr.pop();     // last remove
arr.shift();   // first remove

// method's in arr
// looping methods :
// loop forEach ..
// forEach() ek array method hai jo array ke har element par loop chalata hai
let arr = [1, 2, 3];

arr.forEach(function(item) {
    console.log(item);          // output: 1 2 3
});

// map() methods in arr
// map() - Har element par operation karke new array return karta hai
let nums = [1, 2, 3];

let result = nums.map(n => n * 2);

console.log(result); // [2, 4, 6]

// filter() methods
// condition ke basis par elements select karta hai
let nums = [1, 2, 3, 4];

let result = nums.filter(n => n % 2 === 0);

console.log(result); // [2, 4]

// reduce method
// reduce() - pura array ko ek single value me convert karta ha
let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

// Searching methods
arr.indexOf("apple");   // index deta hai
arr.includes("apple");  // true/false

// Modify Methods
arr.slice(1, 3);   // copy part (original change nahi hota)
arr.splice(1, 2);  // remove/replace (original change hota)

// convert methods
arr.join("-");  // "a-b-c"
arr.toString(); // tostring() - Ye bhi array ko string me convert karta hai, but automatically comma ( , ) use karta hai

// join()
// Array ke sab elements ko string me convert karke join karta hai (beech me jo tum doge wo lagata hai)
let arr = ["a", "b", "c"];

let result = arr.join("-");
console.log(result); // a-b-c



