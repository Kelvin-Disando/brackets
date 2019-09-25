module.exports = function check(str, bracketsConfig) {
    let arrayBrackets = str.split('');
    let openBracket;
    let closeBracket;
    let isSpliced = true;

    while (isSpliced) {

        isSpliced = false;

        for (let i = 0; i < arrayBrackets.length; i++) {
            const element = arrayBrackets[i];
            const previousElement = arrayBrackets[i - 1];
            bracketsConfig.forEach((subarray, i, array) => {
                if (subarray[1] == element) {
                    openBracket = subarray[0];
                    closeBracket = subarray[1];
                }
            })
            if (previousElement == openBracket && element == closeBracket) {
                arrayBrackets.splice(i - 1, 2)
                isSpliced = true;
                break;
            }
        }
    }
    if (arrayBrackets.length == 0) { return true }
    else { return false }

}
