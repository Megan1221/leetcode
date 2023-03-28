/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// const sumMap = new Map()
var isHappy = function(n) {
  const sumSet = new Set()
  // 递归求解
  function isSumHappy(n) {
    // 边界条件
    if (Math.log10(n) % 1 === 0) {
      return true
    }
    const sum = getSquareSum(n)
    if (sumSet.has(sum)) {
      return false
    } else {
      sumSet.add(sum)
    }
    return isSumHappy(sum)
  }
  return isSumHappy(n)
};
function getSquareSum(n) {
  const arr = n.toString().split('')
  // console.log(arr)
  let res = 0
  for (let i of arr) {
    i = Number.parseInt(i, 10)
    res += i ** 2 
  }
  return res

  /**
   *    let sum = 0 
        while (n) {
          sum += (n % 10) ** 2
          n = Math.floor(n / 10)
        }
   */
}

// @lc code=end
// 题目中说了会无限循环，那么也就是说求和的过程中，sum会重复出现，这对解题很重要
// 当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法了。
// 所以这道题目使用哈希法，来判断这个sum是否重复出现，如果重复了就是return false， 否则一直找到sum为1为止。

// 相比Map，set更能节省空间（Set是一组key的集合，但不存储value, 而且key不重复，可自动排重）
// 通过闭包共享sumSet

