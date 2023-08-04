/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 快慢指针
// var removeElement = function(nums, val) {
//   let len = 0
//   for (let i = 0; i < nums.length; i++){
//     if (nums[i] !== val) {
//       nums[len++] = nums[i]
//     }
//   }
//   return len
// };


// 相向指针
var removeElement = function (nums, val) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    while (nums[left] !== val && left <= right)
      left++
    while (nums[right] === val && left <= right)
      right--
    if (left <= right)
      nums[left++] = nums[right--]
  }
  return left
};
// @lc code=end
// 和26方法二的解题思路基本一致
// 对于需要删除的元素，直接用其他需要保留的值覆盖，而不用多次删除
// 双指针法（快慢指针法）： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。
// 相向指针也可以
// 替换即可，不用「交换」

