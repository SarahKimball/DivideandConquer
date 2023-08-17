function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (arr[left] <= num && num < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] < num && num <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// Test cases
console.log(findRotatedIndex([3, 4, 1, 2], 4));               // Output: 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));  // Output: 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));  // Output: 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1
