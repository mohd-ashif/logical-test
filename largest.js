var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const max = Math.max(...[].concat(...arr));

console.log(max)