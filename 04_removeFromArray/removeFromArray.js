const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (typeof arguments[i] != typeof array[j]) {
                break;
            }
            if (arguments[i] == array[j]) {
                array.splice(j, 1);
                break;
            }
        }

    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
