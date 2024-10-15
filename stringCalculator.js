
function add(numbers) {
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiter = parts[0].slice(2);
        const nums = parts[1].split(delimiter);
        return nums.reduce((sum, num) => sum + Number(num), 0);
    }
    if (numbers === "") {
        return 0;
    }
    return numbers.split(/[\n,]/).reduce((sum, num) => sum + Number(num), 0);
}


module.exports = { add };
