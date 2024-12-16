const palindromes = function (str) {
    let word = str.replace(/[^a-zA-Z0-9]/g, "")
    word = word.toLowerCase();
    for(let i = 0; i < word.length/2; i++)
    {
        if(word.charAt(i) != word.charAt(word.length-1-i))return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
