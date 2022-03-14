//exercises 
// min
// const min = (a,b) =>{
//     return Math.min(a,b);
// };

//refactored code 
let min = (a,b)=>{
     if(a > b){
		 return b;
	 }else{
		 return a;
	 }
}

console.log(min(0,10));
console.log(min(0,-10)); 