/*
Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2). The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.
*/

function dynamicFizzBuzz(max, num1, num2) {
    let array = [];
    for (let i = 0; i < max; i+=1){
        if ((i % num1 === 0 || i % num2 === 0) && !(i % num1 === 0 && i % num2 === 0)) {
            array.push(i);
        } 
    }
    return array;
}
