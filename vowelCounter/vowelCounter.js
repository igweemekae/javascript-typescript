function countVowels(word) {
    // your code here...
    let count = 0;
    
      for (let i = 0; i < word.length; i++) {
    
          if ((word[i] === 'a') ||
              (word[i] === 'e') ||
              (word[i] === 'i') ||
              (word[i] === 'o') ||
              (word[i] === 'a'))
          {
            count++;  
      } 
      return count;
  }
} 
console.log(countVowels("bootcamp"));
console.log(countVowels("apple")); 
console.log(countVowels("pizza"));