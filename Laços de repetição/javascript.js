var numbers = "";
for(let i = 0; i < 10; i++) {
    numbers += i;

    if(i != 9) {
        numbers+= '-';
    }
}

var i = 0;
while(i < 10) {
    numbers += i;

    if(i != 9) {
        numbers+= '-';
    }
    
    i++;
}
console.log(numbers);