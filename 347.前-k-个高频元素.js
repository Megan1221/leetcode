/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const countMap = new Map()
  for (i of nums) {
    countMap.set(i, (countMap.get(i) || 0) + 1)
  }
  return Array.from(countMap).sort((a,b) => b[1]-a[1]).map(arr => arr[0]).slice(0,k)
};
// @lc code=end

