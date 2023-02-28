/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = 0
  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== val) {
      nums[len++] = nums[i]
    }
  }
  return len
};
// @lc code=end
// 和26方法二的解题思路基本一致
// 对于需要删除的元素，直接用其他需要保留的值覆盖，而不用多次删除

