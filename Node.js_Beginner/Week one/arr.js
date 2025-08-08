let arr=[19, "dreams", "PlayGround", 2, "xD", "i"];

for(let i=0;i<arr.length;i++){
  if(typeof arr[i] == "number"){
    arr[i]*=3;
  }else{
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
}
console.log(arr);

