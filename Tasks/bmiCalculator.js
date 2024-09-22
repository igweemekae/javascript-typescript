weight = prompt('What is your weight?');
height = prompt('What is your height?');

function bmiCalculator (weight, height) {
    
    BMI = weight/(height * height);
    
    if (BMI < 18.5){
        console.log(`Your BMI is ${BMI}, so you are underweight.`);
    }
    else if (BMI <= 18.5 && BMI <= 24.9){
        console.log(`Your BMI is ${BMI}, so you have a normal weight.`);
    }
    else{
        console.log(`Your BMI is ${BMI}, so you are overweight.`);
    }
}

bmiCalculator(weight, height);