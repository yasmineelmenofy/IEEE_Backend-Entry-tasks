function filtter(arr){
 let regex=/^(hand).*(s|y|le)$/i;
 for(let i=0;i<arr.length;i++){
   if (regex.test(arr[i])) { 
            console.log(arr[i]);
        }
 }
}

let arr=['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];

filtter(arr);