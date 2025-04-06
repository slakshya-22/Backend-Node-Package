const tools = require("./index");

const numbers = [10, 20, 20, 30, 40, 40, 50];
const mixed = [100, "apple", false, "banana", 300, true, null];
const nested = [5, [10, [15, 20]]];

console.log("Total:", tools.getTotal(numbers));
console.log("Without Duplicates:", tools.removeDuplicates(numbers));
console.log("Average:", tools.getAverage(numbers));
console.log("Largest Number:", tools.getLargest(numbers));
console.log("Smallest Number:", tools.getSmallest(numbers));
console.log("Groups of 3:", tools.splitArrayIntoGroups(numbers, 3));
console.log("Flat Array:", tools.makeOneFlatArray(nested));
console.log("Item Count:", tools.getCountOfEachItem(numbers));
console.log("Grouped by Type:", tools.groupByDataType(mixed));
console.log(
  "Without Falsy:",
  tools.removeEmptyValues([null, 0, "grape", "", 99, undefined, ""])
);
