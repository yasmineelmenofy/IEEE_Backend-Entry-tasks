class Instr {
  constructor(name) {
    if (Instr.instance) {
      return Instr.instance; 
    }
    this.name = name;
    Instr.instance = this;
  }
}

class Student {
  constructor(name, needsInstr = false, instrName = null) {
    this.name = name;
    if (needsInstr) {
      this.instr = new Instr(instrName);
    } else {
      this.instr = null;
    }
  }
}
let st1 = new Student("Yasmine", true, "Mr.Ahmed");
let st2 = new Student("Nada", true, "Mr.Ali");
let st3 = new Student("Sama", false);
console.log(st1.instr.name);  
console.log(st2.instr.name); 
console.log(st3.instr);      
