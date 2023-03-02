/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0, right = nums.length - 1
  let idx = right
  const res = nums.concat([])
  while (idx >= 0) {
    let rightSquare = nums[right] * nums[right]
    let leftSquare = nums[left] * nums[left]
    if (rightSquare >= leftSquare) {
      res[idx--] = rightSquare
      right--
    } else {
      res[idx--] = leftSquare
      left++
    }
  }
  return res
};
// 双指针，从两端到中间，绝对值从大到小
