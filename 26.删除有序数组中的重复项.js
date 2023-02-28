/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let left = 0; left < nums.length; left++) {
    let right = left + 1;
    while (nums[right] == nums[left]) {
      right++;
    }
    nums.splice(left, right-left-1);
  }
  return nums.length;
};
// @lc code=end

