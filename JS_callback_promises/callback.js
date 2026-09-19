// 1st example of callback

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Bye!");
}

greet("Sumit", bye); // Hello Sumit
                    // Bye!

// 2nd example 

function orderPizza(callback) {
    console.log("Pizza order kiya");

    setTimeout(() => {
        console.log("Pizza aa gaya");
        callback();
    }, 3000);
}

function eatPizza() {
    console.log("Pizza kha raha hu");
}

orderPizza(eatPizza);

// Pizza order kiya
// (3 sec baad)
// Pizza aa gaya
// Pizza kha raha hu