let age = 18;

if(age < 18) {
    console.log("Idade proibida, volte daqui uns anos");
} else if(age == 18) {
    console.log("Que sorte! Voce tem a idade certinha");
} else {
    console.log("Idade aceita, pode entrar");
}

(age < 18)?console.log("Idade proibida, volte daqui uns anos"):console.log("Idade aceita, pode entrar");

switch (age) {
    case 1:
        console.log("uwnt que fofinho 1 aninho");
        break;
    case 7:
        console.log("Em qual serie está?");
        break;
    default:
        console.log("Olá, seja bem vindo");
        break;
}