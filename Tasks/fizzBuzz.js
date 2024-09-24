/*
Define a function fizzBuzz(max) that takes a number and prints every number from 0 to max (not inclusive) that is divisible by either 3, 5 ot 15, but not both. If the number is divisible by 3 output Fizz in the array. if it is divisible by 5 output Buzz but if divisible by 15 output FizzBuzz. 
*/
var output = [];

function fizzBuzz() {

    for (let i = 1; i < 101; i++) {
       
        if (i % 3 === 0 && i % 5 === 0) {
                output.push('FizzBuzz');
            }
        else if (i % 3 === 0) {
                output.push('Fizz');
            }
        else if (i % 5 === 0) {
                output.push('Buzz');
            }
        else {
            output.push(i);
        }   
    }
    console.log(output);
}

