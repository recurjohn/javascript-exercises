const removeFromArray = function(arr, ...toBeRemoved) {
    let numToBeRemoved = [...toBeRemoved]; //define array of all the parameters

    for (let i=0; i < numToBeRemoved.length; i++) {
        let index = arr.indexOf(numToBeRemoved[i]);

        if (index == -1) {
            console.log("Not in the array.");
        } else {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
