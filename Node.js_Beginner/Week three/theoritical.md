### Compare between the three types of quantifiers in regular expressions (?, +, *).
 - ?: Used in regular expression when 0 or 1 times needed 
 ``` javascript
 /Yasmine?/g   //Yasmine, Yasmin
 ```
 - +: Used in regular expression when 1 or more times needed 
 ``` javascript
 /a+/g	//a, aa, aaa
 ```
 _ *: Used in regular expression when 0 or more times needed 
 ``` javascript
 /Ya*/g	//Y, Ya, Yaa
 ```

---
### What are the characters that can be represented by \w and \b in a regular expression?
 - \w: Uppercase letters: A–Z, Lowercase letters: a–z, Digits: 0–9, Underscore: _     [A-Za-z0-9_]
 - \b: Match word boundary not  characters 
 ``` javascript
 /\btable\b/.test("a table here")   // true
/\btable\b/.test("tablecover")  // false
```
---

### Compare between the Map and WeakMap according to the way they save keys and values.
 - Map: Key Can Be Anything,they prevent the key object from being garbage-collected even if there are no other references to it.
 -WeakMap: Key Can Be Object Only,if there are no other references to the key object elsewhere, it can be garbage-collected.

 ---

### Write an example of a string which matches the following pattern:
 ```javascript
 const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;
 ```
 - any valid date as:11/12/2020
---

### and write another string that violates the following pattern:
 ``` javascript
 const regex = /^(?!.*\bieee\b).+$/i; 
 ```
 - ieee is good

 ---

