/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map()
  for (i in nums) {
    map.set(nums[i],i) // key-value
  }
  for (i = 0; i < nums.length; i++) {
    var diff = target - nums[i]
    var idx = map.get(diff)
    if (idx > 0 && idx != i) {
      return [i, idx]
      // idx一定大于i
    }
  }
  return []
};
// @lc code=end
// 用map做映射

