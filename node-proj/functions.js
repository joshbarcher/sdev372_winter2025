const add = (one, two) => {
    return one + two;
}

const addTo = val => {
    return val + 1;
}

const mult = (one, two) => one * two;
const print = msg => console.log(msg);

console.log(add(1, 7));
console.log(add(-5, 10));
console.log(addTo(10)); //11
console.log(addTo(3)); //4
console.log(mult(5, 3)); //15
console.log(print("Hello")); //???

let nums = [11, 3, 7, 27, 5, 14, 5]
const otherNums = nums.map(elem => elem * 2);

console.log(nums);
nums.sort((one, two) => one - two);

console.log(nums);
console.log(otherNums);