
const fromEuroToDollar = (dollarValue) => {
    return dollarValue * 1.2;
}

const fromDollarToYen = (yenValue) => {
    return yenValue * 127.9;
} 

const fromYenToPound = (poundValue) => {
    return poundValue * 0.8;
}

console.log(fromEuroToDollar(12));


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };