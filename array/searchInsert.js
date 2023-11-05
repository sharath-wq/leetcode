var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (right >= left) {
        mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log(mid, target);

    if (mid === 0) {
        return 0;
    } else if (nums[mid] > target) {
        return mid - 1;
    } else {
        return mid + 1;
    }
};

console.log(searchInsert([1, 3, 5, 6], 0));
