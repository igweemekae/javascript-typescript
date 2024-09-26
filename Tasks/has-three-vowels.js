/* Write a function hasThreeVowels that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels. */

const hasThreeVowels = (str) => {
    
    let counts = 0;
    
    for (let i=0; i<str.length; i++) {
        
        if (str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' ||
            str[i] === 'o' ||
            str[i] === 'u' ) {
    
            counts += 1;
        
        }
    counts;
    }
    if (counts > 3){
            
        return true;
    }
    else {
            
        return false;
    }
}
console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));