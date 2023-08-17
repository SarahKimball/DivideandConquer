function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            return left;
        }

        const mid = Math.floor((left + right) / 2);
        const nextMid = (mid + 1) % arr.length;
        const prevMid = (mid - 1 + arr.length) % arr.length;

        if (arr[mid] <= arr[nextMid] && arr[mid] <= arr[prevMid]) {
            return mid;
        } else if (arr[mid] <= arr[right]) {
            right = mid - 1;
        } else if (arr[mid] >= arr[left]) {
            left = mid + 1;
        }
    }

    return 0;
}

// Test cases
console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(findRotationCount([7, 9, 11, 12, 5]));     // Output: 4
console.log(findRotationCount([7, 9, 11, 12, 15]));    // Output: 0

