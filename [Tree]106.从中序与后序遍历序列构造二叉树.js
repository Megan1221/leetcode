/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) {
    return null
  }
  if (inorder.length === 1) {
    return new TreeNode(inorder[0])
  }  
  
  const val = postorder.pop()
  const root = new TreeNode(val)

  const idx = inorder.indexOf(val)   
  const [leftInorder, leftPostOrder] = [inorder.slice(0, idx), postorder.slice(0, idx)]
  root.left = buildTree(leftInorder, leftPostOrder)

  //注意后序数组的切割位置
  const [rightInorder, rightPostOrder] = [inorder.slice(idx+1), postorder.slice(idx)] 
  root.right = buildTree(rightInorder, rightPostOrder)

  return root
};
// @lc code=end

