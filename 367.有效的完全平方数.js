/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1)
    return true
  let left = 0, right = num 
  let mid
  while (left <= right) {
    mid = parseInt((left + right) / 2)
    if (x / mid > mid)
      left = mid + 1
    if (x / mid < mid)
      right = mid - 1
    if (x / mid === mid)
      return true
  }
  return false 
};
// @lc code=end

