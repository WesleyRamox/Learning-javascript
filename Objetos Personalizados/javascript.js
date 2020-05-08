let person1 = {
    name: 'Thiago'
}

let pessoa = {
    nome: 'Wesley',
    sobrenome: 'Ramos',
    idade: 14,
    status: true,
    array: ['PHP', 'HTML', 'CSS', 'JAVASCRIPT'],
    work: function() {
        alert("Work");
    },
    support: person1
}

console.log(pessoa.support.name + " é Suporte de " + pessoa.nome);