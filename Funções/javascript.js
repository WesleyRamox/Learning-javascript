// Multiplication of values
function multNumbers(a, b) {
    let result =  a * b;
    return result;
}

console.log(multNumbers(10, 2));

let mult = function mult(a, b) {
    let result =  a * b;
    return result;
}

console.log(mult(2,5));

let objMult = {
    func: function(a, b) {
            let result =  a * b;
            return result;
    }
}

console.log(objMult.func(4, 3));

// Set name for users
function myName(val) {

    let name;

    function setName() {
        if(val == 1) {
            name = 'Wesley';
        } else if(val == 2) {
            name = 'cleusa';
        } else {
            name = 'Nenhum nome disponivel';
        }
        return name;
    }

    return setName();
}

console.log(myName(218));

// Arrow Functions

function sum(x, y) {
    return x + y;
}

console.log(sum(10, 5));

let sumArrow = (x, y) => {
    return x + y;
}

console.log(sumArrow(3, 4));

let sumArrow2 = (x, y) => x + y;

console.log(sumArrow2(7, 3));
