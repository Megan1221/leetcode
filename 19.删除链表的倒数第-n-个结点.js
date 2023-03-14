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
var removeNthFromEnd = function (head, n) {
  let ptr = head
  let newHead = new ListNode(101, head)
  let left = newHead
  let len = 1
  while (ptr && ptr.next) {
    ptr = ptr.next
    len++
    if (len > n) {
      left = left.next  
    } 
  }
  const temp = left.next
  left.next = temp === null ? null : temp.next
  return left.val === 101 && left.next === null?  null : newHead.next 

};
// @lc code=end

