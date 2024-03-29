/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = []
  const dfs = function (root) {
    // 边界
    if (!root) {
      return
    }
    // 处理逻辑
    res.push(root.val)
    // 递归
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return res
};
// @lc code=end

