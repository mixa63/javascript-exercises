const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number == 1) return 1;
    let num = 1;
    let trail = 0;
    for (let i = 0; i < number; i++)
    {
        let temp = num;
        num = num + trail;
        trail = temp;
    }
    return trail;
};

// Do not edit below this line
module.exports = fibonacci;
