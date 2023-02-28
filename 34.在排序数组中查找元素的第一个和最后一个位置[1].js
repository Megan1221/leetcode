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
  const idx = binarySearch(nums, target)
  // console.log(idx)
  if(idx === -1)
    return [-1,-1]
  let left = idx, right = left
  while (left >= 0) {
    if (nums[left] === target)
      left--
    else
      break;
  }
  while (right < nums.length) {
    if (nums[right] === target)
      right++
    else
      break;
  }
  return [left+1, right-1]
};
var binarySearch = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (target < nums[mid]) {
      right = mid - 1
    } 
    if (target > nums[mid]) {
      left = mid + 1
    }
    if(target === nums[mid])
      return mid
  }
  return -1
}
// @lc code=end
// 用二分法找到位置，然后向left、right遍历找到左右边界

