/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var totalSum = 0;
    var leftSum = 0;

    nums.forEach((num) => totalSum += num);

    for(i =0; i<nums.length; i++) {
        if (totalSum - leftSum - nums[i] == leftSum) {
            return i;
        }
        leftSum += nums[i]
    }
    return -1;
};