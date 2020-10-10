/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}


// input - two lists
// output - intersection or null
// constraints - none
// edge cases - none
function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  // create var for list1 vals
  var listOne = []
  // create var for list2 vals
  var listTwo = []
  for (var key in list1) {
    listOne.push(list1[key])
  }
  for (var key in list2) {
    listTwo.push(list2[key])
  }
  for (var items of listOne) {
    for (var things of listTwo)
    if (items === things) {
      return items;
    }
  }
  return null;
}

