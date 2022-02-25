//let newString = "";

const repeatString = function(word, timesToRepeat) {
    if (timesToRepeat < 0) { //negative condition
        return "ERROR";
    }
    
    let newString = "";

    for (i=0; i<timesToRepeat; i++) {
        newString += word;
    }
    
    return newString; 
};

// Do not edit below this line
module.exports = repeatString;
