

## Example 1: Arrow function

```js
const player = {
    firstName: "Ahmed",
    lastName: "Hafez",
    introduce: () => {
        console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
    }
};

player.introduce();
```

* In regular functions  this keyword represents the object that called the function, which could be the window, the document, a button or whatever.

* With arrow functions, this is not its own. It inherits this from the surrounding (outer) scope where the function was created. So output here is undefined.

### output

```text
Hey, I'm undefined undefined
```

---

## Example 2: Object Method 

```js
const player = {
    firstName: "Ahmed",
    lastName: "Hafez",
    introduce() {
        console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
    }
};

player.introduce();
```

* Here this refers to the object that call the method
* As intoduce here is regular method 


### output

```text
Hey, I'm Ahmed Hafez
```

---

## Example 3:

```js
function introduce() {
    console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
}

const player = {
    firstName: "Ahmed",
    lastName: "Hafez",
    introduce
};

player.introduce();
```

* It differs from the previous one that the function here is outside the object
* But it works the same as inside it this here also refers to the object that calls it

### output

```text
Hey, I'm Ahmed Hafez
```

---

## Example 4:

```js
function introduce() {
    console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
}

const player = {
    firstName: "Ahmed",
    lastName: "Hafez"
};

introduce();
introduce.call(player);
```

* In the first call of introduct there is no object and this will refer to global object so the result will be undefined 
* In the second call manually this refers to player object 
### output

```text
Hey, I'm undefined undefined
Hey, I'm Ahmed Hafez
```

