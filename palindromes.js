const palindromes = function (string) {
    const lowerString = string.toLowerCase();
    console.log(lowerString);

    const array = lowerString.split('');
    console.log(array);

    let filtered = array.filter((item) => item !== ',' && item !== ' ' && item != '!' && item != '.')
    console.log(filtered);

    let unreversed = filtered.slice();
    console.log(unreversed);

    let reversed = filtered.reverse();
    console.log(reversed);

    unreversed = unreversed.join()
    reversed = reversed.join()

    if (unreversed === reversed) { return true }
    else { return false }
};

// Do not edit below this line
module.exports = palindromes;
