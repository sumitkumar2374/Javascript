// JavaScript Variables ..

console.log("Hey this is tutorial 55");

// var jo hota h wo global variable hota h
var a = 5;
// a = a + 1

// let variable ka scope ek block level tak hota h
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant

// primitive data-type
let x = "Harry bhai";
let y = 22;
let z = 3.55;
// constant jo h const value ke liye use hota h jo ki change nhi ho skta h
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// objects data-type
let obj = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(obj);
obj.salary = "100crores";
console.log(obj);
obj.salary = "500crores";
console.log(obj);

// yaha pr variable ka concept yahi tak tah!
console.log("Here are the concept of js variable")