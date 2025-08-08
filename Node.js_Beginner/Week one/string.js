let s = "Hey There, I'm glad to have you";
let reverse= s.split("").reverse();

for(let i=0;i<reverse.length;i++){
  if(reverse[i] == 'a' || reverse[i] =='u' || reverse[i] =='o' ||reverse[i] == 'i' || reverse[i] =='e'){
    reverse[i]=reverse[i].toUpperCase();
  }
}
reverse=reverse.join("");
console.log(reverse);