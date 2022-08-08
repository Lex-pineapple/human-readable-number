module.exports = function toReadable (number) {
    const NUMS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const DECS = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"];
    if (number < 10) {
        return NUMS[number];
    } else if (number >= 10 && number < 20) {
        return TEENS[number%10];
    } else if (number >= 20 && number < 100) {
        if (number%10 == 0) return DECS[Math.floor(number/10)-1];
        else return DECS[Math.floor(number/10)-1] + " " + NUMS[number%10];
    } else if (number == 100) {
        return "one hundred";
    } else if (Math.floor(number/100) > 0) {
        let tempDecs = number - Math.floor(number/100)*100;
        console.log(tempDecs);
        if (tempDecs < 10) {
            if (Math.floor(number%100) == 0) return NUMS[Math.floor(number/100)] + " hundred";
            else return NUMS[Math.floor(number/100)] + " hundred " + NUMS[tempDecs];
        } else if (tempDecs >= 10 && tempDecs < 20) {
            return NUMS[Math.floor(number/100)] + " hundred " + TEENS[tempDecs%10];
        } else if (tempDecs >= 20 && tempDecs < 100) {
            if (tempDecs%10 == 0) {
                return NUMS[Math.floor(number/100)] + " hundred " + DECS[Math.floor(tempDecs/10)-1];
            } else return NUMS[Math.floor(number/100)] + " hundred " + DECS[Math.floor(tempDecs/10)-1] + " " + NUMS[tempDecs%10];
        }
    }
}
