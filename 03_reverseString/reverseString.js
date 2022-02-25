const reverseString = function(string) {
    let arr = string.split("");
    let arrReversed = arr.reverse();
    let newString = arrReversed.join("");

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
