// create two variable..

let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

// operation's
let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    // agr code sahi ho to try wala execute kr do..
    try {
        console.log("The sum is ", sum * x)
        return true
    // wrna ye catch wala execute kr do..
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    // ye basically function me agr return use kr lete h to uske baad ka code execute nhi hota, agr hm chahte uske baad ka code execute ho to finally ka use krte h..
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()