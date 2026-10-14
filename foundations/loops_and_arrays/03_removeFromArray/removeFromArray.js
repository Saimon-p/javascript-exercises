const removeFromArray = function(arr = [], ...manyArgs) {
    return arr.filter(item => !manyArgs.includes(item))
};

let a = removeFromArray([1, 2, 3, 4], 3);
console.log(a);

// Do not edit below this line
module.exports = removeFromArray;
