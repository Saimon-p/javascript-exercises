const fibonacci = function(num) {

    if (num <= 0 || Number.isNaN(num) || typeof num !== "number") {
    return "OOPS";
}

let fibonacciSequence = [];
let prevFirst = 1;
let prevSecond = 1;
let nextNumber = 0;
fibonacciSequence.push(prevFirst);
fibonacciSequence.push(prevSecond);

for (let i = 2; i <= num; i++) {
    nextNumber = prevFirst + prevSecond;
    fibonacciSequence.push(nextNumber);
    prevFirst = prevSecond;
    prevSecond = nextNumber;
}

return fibonacciSequence[num-1];
};

console.log(fibonacci(NaN));


// Do not edit below this line
module.exports = fibonacci;
