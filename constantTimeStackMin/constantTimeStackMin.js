/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  this.storage = {};
  this.position = 0;
  this.minVal;

// add an item to the top of the stack
  this.push = function(value) {
      if (this.size() === 0 ){
          minVal = value;
      } else if (value < minVal){
          minVal = 2 * value - minVal;
      }
      this.position++;
      this.storage[this.position] = value;
  };

// remove an item from the top of the stack
  this.pop = function() {
      if (this.size > 0) {
         var result = this.storage[this.position];
         delete this.storage[this.position];
         if (this.storage[this.position] < minVal) {
             minVal = 2 * minVal - this.storage[this.position];
         }
         this.position--;
         return result;
      }
  };

// return the number of items in the stack
  this.size = function() {
      return this.position;
  };

// return the minimum value in the stack
  this.min = function() {
      return minVal;
  }


};

// var example = new Stack()
// example.push(4)
// example.push(3)
// example.min() === 3
// example.push(3)
// example.push(2)
// example.push(2)
// example.min() === 2