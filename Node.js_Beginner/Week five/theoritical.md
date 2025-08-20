##  Explain the difference between synchronous and asynchronous code.
 - synchronous : Operations Runs in Sequence, Each Operation Must Wait For The Previous One To Complete
 - asynchronous : Operations Runs In Parallel, This Means That An Operation Can Occur while Another One Is Still Being Processed

## Compare between fetch function and XMLHttpRequest class using Numbers API to call the API and print the response out to the console.
 - fetch : modern and simple, support promise, handle error with catch. and response with json and text 
 ``` javascript
 fetch("http://numbersapi.com/1999/year")
  .then((output) => output.text())   
  .then((outputdata) => {
    console.log("result:", outputdata);
  })
  .catch((error) => {
    console.error("error:", error);
  });
  ```
 - XMLHttpRequest : Verbose, callback-based, No promise support, must use status check to handle errors 
 ``` javascript
 const req = new XMLHttpRequest();
req.open("GET","http://numbersapi.com/1999/year");
req.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(" result:", req.responseText);
  } else {
    console.error("error:", req.status);
  }
};
req.send();
```

## Describe factory design pattern using an example of your own.
 - It’s a creational design pattern,gives us Centralized object creation (easy to manage).
 ``` javascript
 
function Developer(name) {
  this.name = name;
  this.type = "developer";
}
function Tester(name) {
  this.name = name;
  this.type = "tester";
}
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1: return new Developer(name);
      case 2: return new Tester(name);
    }
  };
}
const factory = new EmployeeFactory();
const employees = [];
employees.push(factory.create("Yasmine", 1));
employees.push(factory.create("Ali", 2));
employees.forEach(emp => {
  console.log(`${emp.name} is a ${emp.type}`);
});
```