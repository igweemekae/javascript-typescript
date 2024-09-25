/* Practicing arrow function while calling a function within a function */


const cutPieces = (fruit) => {
    return fruit * 8;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} apples & ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(12, 10));

