/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var newArray = [];
    var sum = 0;
    for(i=0; i < nums.length; i++){
        sum+=nums[i];
        newArray.push(sum);
    };
    return newArray;
};