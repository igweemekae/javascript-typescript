const uncompress = (str) => {
    
    let newWord = '';
    let times = '0123456789';
    
    for (let i=0; i<str.length; i++) {
        
        if (times.includes(str[i])){
            let result = str[i-1].repeat(Number(str[i]));
            newWord += result;
        }
    }
    return newWord;
};
console.log(uncompress('x3y4z2')); 
console.log(uncompress('a5b2c4z1'));
console.log(uncompress('b1o2t1')); 