/**
 * Definition for singly-linked list. **/

function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

 class ListNode {
     val: number
     next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
  }


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {


    let result = new ListNode;
    


return list1
    
};

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
console.log(mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4])))



// Example 2:
// Input: list1 = [], list2 = []
// Output: []
console.log(mergeTwoLists(arrayToList([]), arrayToList([])))


// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
console.log(mergeTwoLists(arrayToList([]), arrayToList([0])))