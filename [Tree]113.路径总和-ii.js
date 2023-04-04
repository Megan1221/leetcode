/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = []
  const dfs = function (node, sum, path) {
    // 边界条件
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      if (sum + node.val === targetSum) {
        path.push(node.val)
        res.push(path)
      }
      return 
    }

    // 单层递归逻辑
    sum += node.val
    path.push(node.val)
    // 不能直接传path，要进行深拷贝
    dfs(node.left, sum, [...path])
    dfs(node.right, sum, [...path])
  }
  dfs(root, 0, [])
  return res
};
// @lc code=end

