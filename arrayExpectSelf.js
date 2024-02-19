function sumOfArrayExceptSelf(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                sum += arr[j];
            }
        }
        result.push(sum);
    }
    return result;
}

const arr = [4,3,2, 10]
console.log(sumOfArrayExceptSelf(arr));
