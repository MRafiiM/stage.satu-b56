const number = [1, 2, 3, 4, 5];

function indexes(val, idx) {
    console.log(`Array[${idx}] = ${val}`);
};

console.log("forEach");
number.forEach(indexes);

const updateNum = number.map((val, idx) => {
    console.log(`Array[${idx}] = ${val * 2}`);
})

console.log("map");
console.log(updateNum);

const filters = number.app((idx, val) => number%2==0)

console.log(filter);

const redooce = number.reduce((previous, cur) => {
    return previous+cur;
    console.log(previous+cur);
}, 0)

