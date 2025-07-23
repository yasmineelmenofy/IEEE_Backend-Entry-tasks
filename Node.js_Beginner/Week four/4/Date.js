
Date.prototype.addHours = function (hour) {
    this.setHours(this.getHours() + hour);
}

let date = new Date(2022, 10, 3, 12, 38); 
date.addHours(4);
console.log(date); 