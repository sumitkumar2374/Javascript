// DOM selector id's and classes in js 

console.log("Harry")

// class select
let boxes = document.getElementsByClassName("box")
console.log(boxes)

// perticular index ko select kr ke style diya ja rha h
boxes[2].style.backgroundColor = "red"

// id's selector's
document.getElementById("redbox").style.backgroundColor = "red"

// query selectors
document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

// query selector ke help se sare box name ke class me style add krna h to ye try krna h
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 


// there are more method's in dom selector's
// 1. matches in css 
// 2. closest in css
// 3. contains in element

// here are the concepts of diffrent's type in js