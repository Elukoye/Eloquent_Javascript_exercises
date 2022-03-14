// Using while loop
let isEven = (num) =>{
  while( num != 0 && num > 0){
    num -= 2;
    if(num == 0) return true;
    else if (num == 1) return false;
    };
};

console.log(isEven(75));

function evenNum( val){
     if(val == 0) return true;
     if(val == 1) return false;
     if(val < 0) {
      return "negative number"
     }else{
       return evenNum(val - 2);
     }
}

console.log(evenNum(-1));