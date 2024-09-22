var boo = prompt('What is your name?');
var bae = prompt('what is your babes name?');

var loveScore = Math.floor((Math.random() * 100) + 1);

if (loveScore >= 80) {
    alert(`Hello ${boo}, your love score with ${bae} is ${loveScore}%. You guys are good to marry. Congrats!`);
}
else if(loveScore >= 50 || loveScore <= 79){
    alert(`Hello ${boo}, your love score with ${bae} is ${loveScore}%. Take it slower and verify each other!`);
}
else{
    alert(`Hello ${boo}, your love score with ${bae} is ${loveScore}%. Do you think you are compactible?`);
}



