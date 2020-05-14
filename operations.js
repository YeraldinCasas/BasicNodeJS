
//const operations1 = { };


function add (a, b) {
    return a + b;
}

function substrac (a, b) {
    return a - b;
}

function multiply (a ,b) {
    return a * b;
}

function divide (a, b) {
    if(b === 0) {
        console.log("No se puede dividir por 0")
    } else {
        return a / b; 
    }
}

exports.add=add;
exports.substrac = substrac;
exports.multiply = multiply;
exports.divide = divide;


/* operations1.add = add;
operations1.substrac = substrac;
operations1.multiply = multiply;
operations1,divide = divide;

module.exports = operations1; */

/* function hello (name) {
    console.log("Hola" + name)
}

module.exports = hello */


