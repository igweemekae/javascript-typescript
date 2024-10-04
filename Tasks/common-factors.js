/* Write a function commonFactors that accepts two numbers as arguments. 
The function should return an array containing positive numbers that are able to divide both arguments. */

const commonFactors = (num1, num2) => {
    let array = [ ];
    
    let greaterNo = 0;
    if (num1 > num2){
        greaterNo = num1;
    }
    else {
        greaterNo = num2; 
    }
    
    for (let i = 1; i < greaterNo; i++) {
        if ( num1 % i === 0 && num2 % i === 0){
            array.push(i);
        }
    }
    return array;
}

console.log(commonFactors(50, 30));
console.log(commonFactors(8, 4)); 