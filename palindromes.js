const palindromes = function (string) {

    const filteredArray = string.toLowerCase().split('')
        .filter((item) => item !== ',' && item !== ' ' && item != '!' && item != '.')

        let unreversed = filteredArray.slice().join();
        let reversed = filteredArray.reverse().join();

    if (unreversed === reversed) return true 
    else return false 
};

// Do not edit below this line
module.exports = palindromes;
