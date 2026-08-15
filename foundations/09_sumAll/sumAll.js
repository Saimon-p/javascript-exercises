const sumAll = function(a, b) {
     
    if (a < 0 || b < 0 ) return "ERROR";
    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

   
    
    let larger, smaller = 0;
    if (a > b) {
        larger = a;
        smaller = b;
    } else {
        larger = b;
        smaller = a;
    }



    let total = 0;
    for (let i = smaller; i <= larger; i++) {
        total += i;
    } 
    return total;
};

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
