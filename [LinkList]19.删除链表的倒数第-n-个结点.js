/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let ptr = head
//   // 虚拟头指针（head可能会被删除，所以要用newHead作为固定的头）
//   let newHead = new ListNode(101, head)
//   let left = newHead
//   let len = 1
//   while (ptr && ptr.next) {
//     ptr = ptr.next
//     len++
//     if (len > n) {
//       left = left.next
//     }
//   }
//   // 删除temp节点
//   const temp = left.next
//   left.next = temp === null ? null : temp.next
//   // 括号内对应[1],1的情况
//   return (left.val === 101 && left.next === null) ? null : newHead.next

// };
var removeNthFromEnd = function (head, n) {
  // dummy head: 简化链表操作，每个节点都有prev
  const root = new ListNode(0, head)
  // n最大取链表长度，所以right要从dummy head出发
  let left = root, right = root
  // right先走n步，走1步是到第一个节点
  while (n > 0) {
    right = right.next
    n--
  }
  // 然后left，right一起走
  while (right.next != null) {
    right = right.next
    left = left.next
  }
  // 删除节点
  deleteNode(left)
  return root.next
};

function deleteNode(prevNode) {
  const targetNode = prevNode.next 
  prevNode.next = targetNode.next
  targetNode.next = null
}
// @lc code=end
// 问题拆分：找位置、做删除
// 删除节点：需要prevNode
// 找位置：需要找倒数第n+1个节点，并且第一个节点没有前一个节点，为了消除他的特殊性，在前面加一个dummy head

