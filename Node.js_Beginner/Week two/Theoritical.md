### Explain the difference between primitive types and reference types in JavaScript.
 - **Primitive types**: These data types are simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods.They are stored directly in memory (stack) by their actual value.
 **EX**: Number, String, Boolean, null, undefined, Symbol, BigInt


 - **reference types**: Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.
 Most of them are considered as objects, and therefore have methods. Examples of such data types include arrays, functions, collections, and all other types of objects.



### Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each

 -**Function Declaration**: A function declaration declares a function with a function keyword. 
 The function declaration must have a function name.
 Function declaration does not require a variable assignment.
 These are executed before any other code.
 The function in the function declaration can be accessed before and after the  function definition.
 Function declarations are hoisted

 **EX**:
 ```javascript
 function sayHello() {
  console.log("Hello!");
 }
 ```
 -**Function Expression**:
 A function expression is similar to a function declaration without the function name.
 Function expressions can be stored in a variable assignment.
 Function expressions load and execute only when the program interpreter reaches the line of code
 Function expressions are not hoisted
 
 **EX**: 
 ```javascript
 const sayHello = function() {
  console.log("Hello!");
 };
 ```


### Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?

 - **pure Function**: 
 is a function (a block of code) that always returns the same result if the same arguments are passed.
 Often used with immutable data structures to ensure reliability.
 Their independence from external states makes them highly reusable.


### Write down the array methods that you have studied and classify them to destructive and not destructive.
 - **Destructive Methods**: That method change the original array
 push() – adds elements to the end.
 pop() – removes the last element.
 shift() – removes the first element.
 unshift() – adds elements to the beginning.
 splice() – adds/removes/replaces elements at specific positions.
 sort() – sorts the array in place.
 reverse() – reverses the order in place.

 - **Non-Destructive Methods**: They do not change the original array 
 slice() – returns a shallow copy of a portion.
 concat() – merges arrays into a new one.
 map() – returns a new array with modified values.
 filter() – returns a new array with filtered values.
 reduce() – reduces the array to a single value (original unchanged).
 find() – returns the first matching element.
 findIndex() – returns the index of the first match.
 includes() – checks if an element exists (returns boolean).
 indexOf() – returns the first index of a given element.
 every() – checks if all elements pass a test.
 some() – checks if some elements pass a test.
 join() – joins all elements into a string.
 flat() – returns a new flattened array.







