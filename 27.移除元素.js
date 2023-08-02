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
var removeElement = function(nums, val) {
  let len = 0
  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== val) {
      nums[len++] = nums[i]
    }
  }
  return len
};
// var removeElement = function (nums, val) {
//   let left = 0, right = nums.length - 1
//   while (left <= right) {
//     if (nums[left] == val) {
//       while (nums[right] === val && right >= left) {
//         right--
//       }
//       if (right > left)
//         [nums[left], nums[right]] = [nums[right], nums[left]]
//     }
//     left++
//   }
//   return nums[right] === val ? right : right + 1
// };
// @lc code=end
// 和26方法二的解题思路基本一致
// 对于需要删除的元素，直接用其他需要保留的值覆盖，而不用多次删除
// 双指针法（快慢指针法）： 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。

