/* You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill. 

Important: The output shoud be returned from the function and you do not need alert, prompt or console.log. The output should match the example exactly, including capitalization and punctuation. 
*/

function whosPaying(names) {
    
       var namesLength = names.length();
       var choicePosition = Math.floor(Math.random() * namesLength);
       var chosen = names[choicePosition];
       
       return `${chosen} is going to buy lunch today!`;
      
    }