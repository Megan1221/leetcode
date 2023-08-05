/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const lenA = getLinkListLength(headA)
  const lenB = getLinkListLength(headB)
  const n = lenA - lenB
  let ptrA = headA, ptrB = headB
  if (n > 0) {
    ptrA = moveN(headA, n)
  } else {
    ptrB = moveN(headB, Math.abs(n))
  }
  // console.log(ptrA, ptrB)
  while (ptrA !== null && ptrB !== null) {
    if (ptrA === ptrB) {
      return ptrA
    } else {
      ptrA = ptrA.next
      ptrB = ptrB.next
    }
  }
  return null
};
function getLinkListLength(head) {
  let ptr = head, len = 0
  while (ptr !== null) {
    len++
    ptr = ptr.next
  }
  return len
}
function moveN(head, n) {
  let ptr = head, len = 1 
  while (len <= n && ptr !== null) {
    len++
    ptr = ptr.next
  }
  return ptr
}


// @lc code=end
// 从两个链表的构造过程分析，长度做差，长的先走n步，然后再一起走就好了，而不是比较value

var getIntersectionNode2 = function (headA, headB) {
  let pa = headA, pb = headB, flagA = true, flagB = true
  while (pa && pb && pa !== pb) {
    if (!pa.next && flagA) {
      pa = headB
      flagA = false
    } else {
      pa = pa.next
    }
    if (!pb.next && flagB) {
      pb = headA
      flagB = false
    } else {
      pb = pb.next
    }
  }
  return pa === pb ? pa : null
}
// 链表A走：A+B，链表B走B+A，这样他们第一次相遇的地方就是第一个相交的地方