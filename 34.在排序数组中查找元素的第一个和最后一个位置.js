/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const leftBorder = getLeftBorder(nums, target)
  const rightBorder = getRightBorder(nums, target)
  if (leftBorder === -2 || rightBorder === -2) {
    return [-1,-1]
  }
  if(rightBorder - leftBorder > 1)
    return [leftBorder + 1, rightBorder - 1]
  return [-1,-1]
  
}
function getLeftBorder(nums, target) {
  let left = 0, right = nums.length - 1
  let mid
  let leftBorder = -2 //记录没有被赋值的情况
  while (left <= right) {
    mid = parseInt((left + right ) / 2)
    if (target > nums[mid]) {
      // target在右半区间
      left = mid + 1
    } else {
      // target在左半区间
      right = mid - 1
      leftBorder = right
    }
  }
  return leftBorder
}
function getRightBorder(nums, target) {
  let left = 0, right = nums.length - 1
  let mid
  let rightBorder = -2 //记录没有被赋值的情况
  while (left <= right) {
    mid = parseInt((left + right ) / 2)
    if (target >= nums[mid]) {
      // target在右半区间
      left = mid + 1
      rightBorder = left
    } else {
      // target在左半区间
      right = mid - 1
    }
  }
  return rightBorder

}
// @lc code=end
// 两次二分法，分别用来寻找左边界和右边界
// 左边界：从左往右第一个=target 的值
// 右边界：最后一个=target的值 
// 二分法每次会抛弃半个区间，寻找左边界就是在target=nums[mid]的情况下也要抛弃右区间，不断压缩最终找到左边界

