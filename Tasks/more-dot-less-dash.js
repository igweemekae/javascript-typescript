/* Write a function moreDotLessDash that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-) */

const moreDotLessDash = (str) => {
    
    let dotNo = 0;
    let dashNo = 0;
    
    for (let i=0; i<str.length; i++){
        if (str[i] === '.'){
            dotNo += 1;
        }
        else if (str[i] === '-'){
            dashNo += 1;
        }
    }
    if (dotNo < dashNo){
        return `there are more dots ${dotNo} than dashes ${dashNo}`
    }
    else{
        return `there are more dashes ${dashNo} than dots ${dotNo}`
    }
  }

  