function sortedFrequency(arr, num) {
    function findLeft(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    function findRight(arr, num) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] <= num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }

    const leftIndex = findLeft(arr, num);
    const rightIndex = findRight(arr, num);

    if (leftIndex <= rightIndex) {
        return rightIndex - leftIndex + 1;
    } else {
        return -1;
    }
}

// Test cases
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // Output: 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // Output: 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // Output: 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // Output: -1
