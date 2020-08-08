const nums = [1, 2, 3];
// append to end
const appendEnd = [...nums, 5];
const appendFront = [5, ...nums];
// insert
const index = numbers.indexOf(2);
const insereted = [...nums.slice(0, index), 3, ...nums.slice(index)];
// remove
const removes = nums.filter((n) => n !== 2);
// update
const updated = nums.map((n) => (n == 2 ? 20 : n));
