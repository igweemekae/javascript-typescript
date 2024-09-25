/* Write your code below. Good luck! 🙂 */

const calcAverage = (a, b, c) => {
    var avgScore = (a + b + c) / 3 ;
    return avgScore;
}

var scoreDolphins = calcAverage(44, 23, 71);
var scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (scoreDolphins, scoreKoalas) => {
    
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas}`);
    }
    else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins}`);
    }
    else {
        console.log('No team wins...');
    }
    
};

checkWinner(scoreDolphins, scoreKoalas);