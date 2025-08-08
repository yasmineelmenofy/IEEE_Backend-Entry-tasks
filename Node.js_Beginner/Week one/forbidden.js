let text = "Please";
let forbiddenLetters = ['r', 'x', 'p', 'a'];
let modified=text.split("").filter(char => !forbiddenLetters.includes(char.toLowerCase()));

let result = modified.join("-");
console.log(result);