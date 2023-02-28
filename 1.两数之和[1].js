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
  var sourceNums = nums.concat([])
  nums.sort((a,b) => a-b)
  var left = 0, right = nums.length - 1
  var sum = nums[left] + nums[right]
  while (sum != target) {
    if (sum > target) {
      right--
      // max+min都>target了，所以max一定不符合，所以可以左移right
    } else {
      left ++
    }
    if (right === left)
      return []
    else
      sum = nums[left] + nums[right]
  }
  return [sourceNums.indexOf(nums[left]),sourceNums.lastIndexOf(nums[right])]
};
// @lc code=end
// Array: concat返回新数组、sort更改原数组+需要给排序函数
// indexOf、lastIndexOf

