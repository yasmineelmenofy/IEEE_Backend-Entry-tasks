### Explain the difference between == and === in JavaScript
  - == : is called Loose Equality checks only if the values are equal or not 
    Ex: '5' == 5 will result in true
  - === : is called Strict Equality checks both the value and type 
    Ex: '5' == 5 will result in false 
-- 

### Hamed is simply trying to sort an array of numbers but unfortunately this sort method isn't working as expected. Can you tell Hamed the reason for this behavior and how to implement it in a right way?
```js
const arr = [10, 5, 11];
arr.sort(); 
```
- .sort() converts everything to strings and sorts lexicographically by default.
  so to solve the problem 
  ```js
arr.sort((a, b) => a - b);
console.log(arr); // [5, 10, 11]
```