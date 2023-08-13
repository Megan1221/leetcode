/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const compareTwo = function (left,right) {
    // 边界条件
    if (!left && !right)
      return true
    if ((!left && right) || (left && !right) || (left.val !== right.val))
      return false
    
    // left.val = right.val
    const res1 = compareTwo(left.left, right.right)
    const res2 = compareTwo(left.right, right.left)
    return res1 && res2
  }
  return compareTwo(root.left,root.right)
};
// @lc code=end
// 使用递归遍历左右子树 递归三部曲
// 1. 确定递归的参数 root.left root.right和返回值true false
// 2. 确定终止条件 空的情况
// 3. 确定单层递归逻辑

// 后序遍历：一个是左右中，一个是右左中

var isSymmetric = function (root) {
  return checkSubTree(root.left, root.right)
};

const checkSubTree = (r1, r2) => {
  if (!r1 && !r2) return true
  if (r1 && r2) {
    return r1.val === r2.val && checkSubTree(r1.left, r2.right) && checkSubTree(r1.right, r2.left)
  }
  return false
}