function getTotal(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}

function getAverage(numbers) {
  if (numbers.length === 0) return 0;
  return getTotal(numbers) / numbers.length;
}

function getLargest(numbers) {
  return Math.max(...numbers);
}

function getSmallest(numbers) {
  return Math.min(...numbers);
}

function splitArrayIntoGroups(array, groupSize) {
  const result = [];
  for (let i = 0; i < array.length; i += groupSize) {
    result.push(array.slice(i, i + groupSize));
  }
  return result;
}

function makeOneFlatArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function getCountOfEachItem(array) {
  const count = {};
  for (const item of array) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

function groupByDataType(array) {
  const result = {};
  for (const item of array) {
    const type = typeof item;
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(item);
  }
  return result;
}

function removeEmptyValues(array) {
  return array.filter(Boolean);
}

module.exports = {
  getTotal,
  removeDuplicates,
  getAverage,
  getLargest,
  getSmallest,
  splitArrayIntoGroups,
  makeOneFlatArray,
  getCountOfEachItem,
  groupByDataType,
  removeEmptyValues,
};
