
function add(numbers) {
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiter = parts[0].slice(2);
        const nums = parts[1].split(delimiter).map(Number);
        return checkForNegatives(nums);
    }
    if (numbers === "") {
        return 0;
    }
    const nums = numbers.split(/[\n,]/).map(Number);
    return checkForNegatives(nums);
}

function checkForNegatives(nums) {
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return nums.reduce((sum, num) => sum + num, 0);
}


module.exports = { add };
