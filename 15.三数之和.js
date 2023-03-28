/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // 数组排过序，如果第一个数大于0直接返回res
    if (nums[i] > 0) return res
    // 去重
    if(nums[i] == nums[i-1]) continue
    let left = i+1, right = nums.length - 1
    while (left < right) {
      const threeSum = nums[i] + nums[left] + nums[right]
      if (threeSum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        // 去重
        while (left < right && nums[right] == nums[right - 1]) {
          right--
        }
        while (left < right && nums[left] == nums[left + 1]) {
          left++
        }
        left++
        right--
      } else if (threeSum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
};

// @lc code=end
// 双指针法：一层for循环num[i]为确定值，循环内有left和right下标作为双指针

