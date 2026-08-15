const reverseString = function(str) {
    let newString = "";
    
    for (let i = str.length - 1; i >= 0; i--) {   

        newString += str.at(i);
    }
    
    return newString;

    
};

console.log(
reverseString('novabe wodkaowk'));


// Do not edit below this line
module.exports = reverseString;
