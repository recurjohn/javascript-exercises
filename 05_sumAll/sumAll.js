const sumAll = function(start, end) {
    if (typeof start != "number" || typeof end != "number") {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    } else if (start > end) { 
        let placeholder = start; //start
        start = end; //end
        end = placeholder; //start
    }

    return ((end-start)+1) * (start + end) / 2; //shoutout algorithms
};

// Do not edit below this line
module.exports = sumAll;
