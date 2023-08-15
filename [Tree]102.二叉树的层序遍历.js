/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root)
    return []
  const queue = [root]
  const res = []
  while (queue.length) {
    // 记录当前层级节点数:上一层的节点都出队列时，此时队列的长度就是这一层的节点的数量
    let length = queue.length;
    // 存放每一层的节点
    let curLevel = []
    for (let i = 0; i < length; i++) {
      const head = queue.shift()
      head.left && queue.push(head.left)
      head.right && queue.push(head.right)
      curLevel.push(head.val)
    }
    res.push(curLevel)
  }
  return res 
};


// 2023-8-15 下面的方法有点麻烦
// var levelOrder = function (root) {
//   if (!root) return []
//   const q = [root]
//   const res = []
//   traverseLayer(1)

//   function traverseLayer(count) {
//     if (count === 0)
//       return
//     let nextLayer = 0
//     const layer = []
//     // 遍历当前层
//     for (let i = 0; i < count; i++) {
//       const top = q.shift()
//       layer.push(top.val)
//       if (top.left) {
//         q.push(top.left)
//         nextLayer++
//       }
//       if (top.right) {
//         q.push(top.right)
//         nextLayer++
//       }
//     }
//     res.push(layer)
//     traverseLayer(nextLayer)

//   }
//   return res
// };
// @lc code=end

