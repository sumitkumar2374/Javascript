// Strings in js

console.log("This is strings tutorial")

// create a strings
let a = "Harry";

// print index value 
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// ye undefined show krega 
// console.log(a[5]);


// ye length find krega 
console.log(a.length)

// ye do strings ko add krta h 
let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)


// ye sab strings ke methods h
let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 
console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

// strings ko change nhi kr skte h isilye last agr 'b' ko print kre to jo string bnaya tha wahi print hoga
console.log(b)

// ye rha concept of string
console.log("Here are the concepts of strings in js")