const removeDuplicates = (nums) => {
    const hashSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            continue;
        } else {
            hashSet.add(nums[i]);
        }
    }

    return [...hashSet];
};

console.log(removeDuplicates([1, 1, 2])); // [1, 2]
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 2, 4, 5])); // [0, 1, 2, 3, 4, 5]
