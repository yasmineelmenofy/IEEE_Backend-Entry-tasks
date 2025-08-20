function replacee(text) {
  return text.replace(/\d+/g, function(nAsT) {
    let number = parseInt(nAsT, 10);
    if (number % 2 !== 0) {
      return "BEEP";   
    } else {
      return nAsT; 
    }
  });
}
let ex = "I have 12 cars, 11 of which are 89 years old";
let result = replacee(ex);
console.log(result);
