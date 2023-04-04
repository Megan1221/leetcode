/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0
  const findLeftLeaf = function (root) {
    if (!root) {
      return 
    }
    // left leaf
    if (root.left && !root.left.left && !root.left.right) {
      sum += root.left.val
    }
    findLeftLeaf(root.left)
    findLeftLeaf(root.right)
  }
  findLeftLeaf(root)
  return sum
};
// @lc code=end
// 必须要通过节点的父节点来判断其左孩子是不是左叶子

