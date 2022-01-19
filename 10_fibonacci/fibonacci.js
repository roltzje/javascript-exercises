const fibonacci = function(value) {
    let num = parseInt(value);
    let prevNum = 1;
    let prePrevNum = 0;
    let fib = 0;

    if (num < 0) {
        return "OOPS";
    }

    if (num == 1) {
        return 1;
    }

    for (i=1; i<num; i++) {
        fib = prevNum + prePrevNum;
        prePrevNum = prevNum;
        prevNum = fib;

    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;

