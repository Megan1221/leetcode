/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // 递归参数和返回值
  // 边界
  if (!root) {
    return []
  }
  // 叶子结点
  if (!root.left && !root.right) {
    return [root.val.toString()]
  }
  // 单层递归逻辑
  const subPaths = binaryTreePaths(root.left).concat(binaryTreePaths(root.right))
  return subPaths.map(path => `${root.val}->${path}`)
};
// @lc code=end

