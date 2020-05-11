// var numbers = "";
// for(let i = 0; i < 10; i++) {
//     numbers += i;

//     if(i != 9) {
//         numbers+= '-';
//     }
// }

// var i = 0;
// while(i < 10) {
//     numbers += i;

//     if(i != 9) {
//         numbers+= '-';
//     }
    
//     i++;
// }

// do {
//     numbers += i;
//     if(i != 9) {
//         numbers+= '-';
//     }

//     i++;
// } while(i < 10);

// console.log(numbers);

// let person = {
//     name: "Wesley",
//     age: 14,
//     city: "SP"
// }

// for(values in person) {
//     console.log(person.name);
// }

let pessoas = {
    aluno: {
        nome: "Wesley",
        age: 14
    },
    professor: {
        nome: "Micael",
        age: 34
    }
}

for(key in pessoas) {
    console.log(pessoas.professor);
}

let nomes = ['Wesley', 'Maicon', 'Vanderson', 'Cleiton'];

nomes.forEach(names => {
    console.log(names);
});