const sumAll = function(first, second) {
    if (typeof first != "number" || typeof second != "number") {
        return 'ERROR';
    }
    if (first < 0 || second < 0) {
        return 'ERROR';
    }

    let lower = Math.min(first,second);
    let upper = Math.max(first,second);
    let sum = 0;

    for (i = lower; i < upper + 1; i++) {
        sum = sum + i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
