/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  let res = []
  for (let i = 0; i < len - 3; i++){
    if (nums[i] === nums[i - 1]) continue
    const subSum = threeSum(nums.slice(i + 1), target - nums[i], nums[i])
    if (subSum.length)
      res = res.concat(subSum)
  }
  // console.log(res)
  return res
};

var threeSum = function (nums, target, item) {
  // console.log(item)
  const len = nums.length
  let res = []
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] === nums[i - 1]) continue
    const subSum = twoSum(nums.slice(i + 1), target - nums[i], nums[i])
    if (subSum.length) {
      subSum.map(e => e.push(item))
      res = res.concat(subSum)
    }
  }
  // console.log(res)
  return res 
}

var twoSum = function (nums, target, item) {
  const len = nums.length
  const res = []
  let [pl, pr] = [0, len - 1]
  while (pl < pr) {
    const sum = nums[pl] + nums[pr]
    if (sum > target) {
      pr--
    } else if (sum < target) {
      pl++
    } else {
      res.push([item, nums[pl], nums[pr]])
      while (nums[pr] === nums[--pr]){}
      while (nums[pl] === nums[++pl]){}
    } 
  }
  return res
}

// fourSum([0, 0, 4, -2, -3, -2, -2, -3], -1)
// @lc code=end

