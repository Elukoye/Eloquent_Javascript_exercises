// const makeNoise = function(){
//     console.log("oh boy oh boy");
// }
// makeNoise()

// const findSquare = function(x){
//     console.log(x*x);
// }
// findSquare(2)

// let x = 10;
// if(true){
//     let y = 20;
//     var z = 30;
//     console.log(x+y+z );
// }
// console.log(x  + z)

// const hummus = function(factor){ 
//     const ingredient = function(amount, unit, name){ 
//         let ingredientAmount = amount * factor; 
//         if (ingredientAmount > 1){ 
//                 unit += "s"; 
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);  
//     };
//         ingredient(1, "can", "chickpeas");
//         ingredient(0.25, "cup", "tahini");
//         ingredient(0.25, "cup", "lemon juice"); 
//         ingredient(1, "clove", "garlic"); 
//         ingredient(2, "tablespoon", "olive oil"); 
//         ingredient(0.5, "teaspoon", "cumin"); 
//     };
//     hummus()

// function future(){
//     return "YOU WILL NEVER HAVE FLYING CARS"
// }

// console.log("future says:", future());

//ARROW FUNCTION
// const cost = (x,y) =>{
//     console.log( x * y);
// }

// cost(3,4)

// const horn = () =>{
//     console.log("toot");
// }

// horn()

// function greet(who){ 
//     console.log("Hello " + who);
//  } 
//  greet("Harry"); 
//  console.log("Bye");

//  function chicken(){ 
//      return egg(); 
//     } 
// function egg(){
//      return chicken();
// } 
//  console.log(chicken() + " came first.");

// const add = (x,y) =>{
//     console.log( x+ y);
// }
// add(3,4,5)

// function printFarmInventroy(cow,chicken){
//     let cowString = String(cow);
//     while(cowString.length < 3){
//         cowString = "0" + cowString;
//     }
//     console .log(`${cowString} Cows` );

//     let chickenString = String(chicken);
//     while(chickenString.length < 3){
//         chickenString = "0" + chickenString;
//     }
//     console.log(`${chickenString} Chicken` )
// } 

// printFarmInventroy(11,7)

// modification of the above 
// function paddedWithLabel(number,label){
//       let numberString = String(number);
//       while(numberString.length < 3){
//           numberString = "0" + numberString;
//       } 
//       console.log(`${numberString} ${label}` );
// }

// paddedWithLabel(1,"cow")
// paddedWithLabel(7,"chicken")
// paddedWithLabel(11,"pigs")


// Exercices for Chapter 3
/*Minimun*/
// function minNumber(num_1, num_2){
//     if(num_1 < num_2){
//         console.log(num_1);
//     }
//     else if(num_2 < num_1){
//         console.log(num_2);
//     }
// } 

// minNumber(9,10)
// minNumber(4,3)

/*Recursion*/
// function isEven(positiveNum){
//     if (positiveNum == 0){
//         return true;
//     }
//     if (positiveNum == 1){
//         return false;
//     }
//     if (positiveNum < 0){
//         return isEven(-positiveNum); 
//     }
//     return isEven(positiveNum - 2);
   
// }

// isEven(50)

/*bean counting*/
// let string = "flavor"
// console.log(string[string.length - 1])

function countB(string){
    return countChar(string,"B");
}

function countChar(string, char){
    let result = 0 
    for(var i =0; i < string.length; i++){
        if(string[i] == char){
            result += 1
        }
    }
   return result
}

console.log(countB("BlaBlaBla"))
console.log(countChar("BlaBlaBla","B"))
console.log(countB("BBC"));
console.log(countChar("kakkerlak", "k"));