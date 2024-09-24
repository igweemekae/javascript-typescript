array = ['rock', 'paper', 'scissors'];
arrayLength = array.length;


function getComputerChoice() {
    for (i = 0; i <= arrayLength; i++){
        randNo = Math.floor(Math.random() * arrayLength);
        Choice = array[randNo];
        return Choice;
    }
    
}