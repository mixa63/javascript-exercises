const removeFromArray = function(array, ...numbers) {

    numbers.forEach(element => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1);
                i--;
            }
        }
    });
    
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
