// practice 1
function countOccurrences(arr) {
  const counts = new Map();

  for (const item of arr) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }

  return counts;
}

const items = ["apple", "banana", "apple", "orange", "banana", "banana"];
const result = countOccurrences(items);
console.log(result);
// Output: Map(3) { 'apple' => 2, 'banana' => 3, 'orange' => 1 }

// practice 2
function multiply(...numbers) {
  const unique = new Set(numbers);

  let result = 1;
  for (const num of unique) {
    result *= num;
  }

  return result;
}

console.log(multiply(2, 3, 4)); // 24
console.log(multiply(2, 3, 2, 4)); // 24
console.log(multiply(5, 5, 5, 5, 1)); // 5
console.log(multiply(7, 7, 2)); // 14

// practice 3
function getElement(array, index) {
  try {
    if (!Array.isArray(array)) {
      throw new TypeError('First argument must be an array');
    }

    if (typeof index !== 'number' || Number.isNaN(index)) {
      throw new TypeError('Second argument must be a number');
    }

    if (index < 0 || index >= array.length) {
      throw new RangeError('Index out of bounds');
    }

    return array[index];
  } catch (error) {
    return `${error.name}: ${error.message}`;
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(getElement(arr, 2));             // 3
console.log(getElement(arr, 10));            // RangeError: Index out of bounds
console.log(getElement(arr, 'two'));         // TypeError: Second argument must be a number
console.log(getElement('not an array', 2));  // TypeError: First argument must be an array