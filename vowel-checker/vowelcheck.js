/* Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel. */

const vowchecker = (word) => {
    
    let vowels = 'aeiou';

    for(i = word.length - 1; i > 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
           return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

let hipsterfy = (sentence) => {
    let words = [];
    let sents = sentence.split(' ');

    for (let i = 0; i < sents.length; i++) {
        let word = sents[i];
        let result = vowchecker(word);
        words.push(result); 
    }
    return words.join(' ');
    
};