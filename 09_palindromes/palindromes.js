const palindromes = function (string) {

    string = string.replace(/[^A-Za-z]/g, '');
    string = string.toLowerCase();

    let splitString = string.split("");
    let reversed = splitString.reverse();
    let palindrome = reversed.join("");
    console.log(palindrome);

    if (palindrome == string) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
