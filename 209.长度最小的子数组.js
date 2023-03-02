/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let sum = 0 
  let left = 0, right = 0
  // 注意：因为每次res都取min，所以初值应该为MAX_INTEGER而不是0 
  let res = Number.MAX_SAFE_INTEGER 
  // 右指针负责扩大窗口
  for (right; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      let len = right - left + 1 
      res = len < res ? len : res
      // 缩小窗口
      sum -= nums[left++]
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res
};
// @lc code=end

