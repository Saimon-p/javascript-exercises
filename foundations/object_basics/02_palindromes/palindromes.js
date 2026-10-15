const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'

    string = string.toLowerCase();
    string = string.split('');
    string = string.filter(el => alphanumerical.includes(el));
    string = string.join('');

    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
};

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
