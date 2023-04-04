/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return Array.from(new Set(nums1.filter(i => nums2.includes(i))))
};
// @lc code=end
// 使用set去重
// Array.from, Array.filter, Array.includes, Set

