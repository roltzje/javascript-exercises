const repeatString = function(string, iter) {
    if (iter < 0) {
        return 'ERROR';
    } else if (iter === 0) {
        return '';
    } else if (iter === 1) {
        return string;
    } else {
        newString = string;
        for (i=1; i < iter; i++) {
            newString =  newString + string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
