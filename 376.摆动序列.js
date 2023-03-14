/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if(nums.length === 1)
    return 1
  let down = 1, up = 1
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > nums[i - 1]) {
      up = Math.max(down+1, up)
    }
    if (nums[i] < nums[i - 1]) {
      down = Math.max(down, up+1)
    }
  }
  return Math.max(down,up)
};
// @lc code=end

