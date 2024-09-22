/*
Define a function isPrime(number) that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself.
*/

function isPrime(number) {
    for (let num = 0; num <= number; num++) {
        if (number % 1 === 0 && number % number === 0) {
                return true;
        }else{
                return false;
        }
    }
}

