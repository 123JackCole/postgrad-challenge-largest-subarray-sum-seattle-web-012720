let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];

const largestSubarraySum = (arr) => {

    let total,
        max = 0;

    for (let i = 0; i < arr.length; i++) {
        total = 0;
        for (let j = i; j < arr.length; j++) {
            total += arr[j];
            if (total > max) max = total;
        }
    }

    return max;

}

console.log(largestSubArray(array));