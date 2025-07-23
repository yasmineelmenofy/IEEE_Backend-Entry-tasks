/* 1. Static properties 
 Means that the property or method belongs to the class itself not the object
*/
class Student {
  static numberofstudents = 100;

  constructor(name) {
    this.name = name;
  }
}

console.log(Student.numberofstudents); // 100
let student = new Student("Nada");
console.log(student.numberofstudents); // undefined


/* 2.Private Properties
 Means that Properties are only accessible inside the class 
*/

class SchoolManager {
  #securityCode = "1234"; //private

  GetCode() {
    return "Access Denied";
  }
}

let manager = new SchoolManager();
console.log(manager.GetCode());    //  Access Denied
//console.log(manager.#securityCode);   //  SyntaxError


/* 3.Setters and Getters
Reading and writting to the properties 
*/

class Teacher {
  constructor(name) {
    this._teachername = name; 
  }

  get teachername() {
    return this._teachername;
  }

  set teachername(value) {
    this._teachername = value;
  }
}

let t1 = new Teacher("Nada");
console.log(t1.teachername);   //getter
t1.teachername = "Yasmine";     // setter
console.log(t1.teachername);    // Yasmine


/* 4.Method Chaining
It’s a technique where multiple method calls are chained together
*/

class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}


