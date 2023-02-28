/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0, right = 0
  for (right; right < nums.length; right++){
    if (nums[right] !== 0) {
      nums[left++] = nums[right]
    }
  }
  for (left; left < nums.length; left++){
    nums[left] = 0
  }
  return nums
};
// @lc code=end

