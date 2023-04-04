/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  let mid
  while (left <= right) {
    mid = parseInt((left + right) / 2)
    if (target === nums[mid]) {
      return mid
    }
    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1 

};
// @lc code=end
// 这道题目的前提是数组为有序数组
// 同时题目还强调数组中无重复元素，因为一旦有重复元素，使用二分查找法返回的元素下标可能不是唯一的
// 这些都是使用二分法的前提条件

