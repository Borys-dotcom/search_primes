let primesArray = [];
primesArray[0] = 2;
let term = 0;
let isPrime = 1;

let checkedNumber = 3;

let counter = 0;

while(1){
    while ((primesArray[counter] <= Math.sqrt(checkedNumber)) && (term === 0) && (counter<primesArray.length)){

        if(checkedNumber%primesArray[counter] === 0){
            term = 1;
            isPrime = 0;
        }
        counter++;
    }

        if (isPrime === 1) {
            console.log(`Prime no. ${primesArray.length}: ${checkedNumber}`);
            primesArray[primesArray.length] = checkedNumber;
        }
        isPrime = 0;
        counter = 0;
        term = 0;
        checkedNumber++;
        isPrime = 1;
}