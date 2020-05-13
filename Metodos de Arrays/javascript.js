let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d"];
let arr3 = [1, 2, 3, 4, 5];

// Concatenação
let arrFinal = arr1.concat(arr2);

// Every
let everyX = arrFinal.every(
    function verifyElements(elem, ind, obj) {
        return(typeof elem == "number");
    }
);

// Filter
let filterX = arrFinal.filter(
    function verifyElements(elem, ind, obj) {
        return(elem < 5);
    }
);

// ForEach
let data = "";
let forEachX = arrFinal.forEach(
    function verifyElements(elem, ind, obj) {
        if(typeof elem == 'string') {
            data+="Indice "+ind+" : "+elem+'\n';
        }
    }
)

// IndexOf
let indexOfX = arrFinal.indexOf(1);
if(indexOfX == -1) {
    alert('Esse dado não existe');
}

// Last Index Of
    // Ultimo dado do array com o valor inserido na Função
let lastIndexOfX = arrFinal.lastIndexOf("d");

// Join
let joinX = arrFinal.join(" | ");

// Map e Push
let mapFinal = [];
let mapX = arrFinal.map(
    function verifyElements(elem, ind, obj) {
        if(typeof elem == 'number') {
            mapFinal.push(elem * 2);
        } else {
            mapFinal.push(elem);
        }
    }
);

// Pop
mapFinal.pop();

// Some
let someX = arrFinal.some(
    function verifyElements(elem, ind, obj) {
        return elem == 7;
    }
);

// Reverse
let reverseX = arrFinal.reverse();

console.log(reverseX);
console.log(someX);
console.log(mapFinal);
console.log(joinX);
console.log(lastIndexOfX);
console.log(data);