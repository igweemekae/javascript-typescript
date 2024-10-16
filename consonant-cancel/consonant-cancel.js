// Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.

const consonantCancel = (sentence) => {
    let array = sentence.split(' ');
    let words = [];
    
    for (i = 0; i < array.length; i++) {
        let word = array[i];
        words.push(vowelword(word));
    }
    return words.join(' ');
}

const vowelword = (word) => {
    let vowels = 'aeiou'
    for(let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(i);
        }
    }
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"