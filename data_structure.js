// let dayLog ={
//     "morning" : "wake up",
//     "lunch": "eat a light meal",
//     "diner" : "had nothing to eat "

// };
// console.log(dayLog.lunch)
// console.log(Object.keys)
// console.log(typeof[])

// let object1 = {value :10}
// let object2 = object1
// let object3 = {value :10}
// object1.value = 15

// console.log( object1 == object2)
// console.log( object1 == object3)
// console.log( object3.value)
// console.log( object2 == object3)
// console.log( object1.value)
// console.log(object2.value)


// let kim = "Kim";
// kim.age = 88;
// console.log(kim.age)

// console.log("coconuts".slice(4,7))
// console.log(" okay".trim())
// console.log("  okay")
// // console.log(String(6).padStart(2, "4"));


// // let sentence = "Secretarybirds specialize in stomping"
// // let words = sentence.split(" ")
// // // console.log(words)
// // console.log(words.join(". "))
// //  let word = "you are here";
// //  console.log(word.repeat(3));

// function max(...numbers){
//     let result = -Infinity;
//     for(let number of numbers){
//         if (number > result) result = number;
//     }
//     return result;
// }
// console.log(max(4,1,9,-2))

// let words = ["never fully"];
// console.log(["will", ...words, "understand"])

// console.log(Math.random())

// let string = JSON.stringify({"squirel" : false, "events" :["weekend","day","night"]})
// console.log(string.length)
// console.log(JSON.parse(string).events)


// Exercises
// sum of range 
// function sum(start,end){
//     result = 0
//     for(i = start;i <= end; i++){
//         result += i
//     }
//     return result;
// }

// console.log(sum(1,10))

// function sumOfArray(arr){
//     sum = 0;
//     for(i= 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(sumOfArray(arr))

// function stepInArr(start,end,step){
//     result =[];
//    if (step < 0){
//         for(i = start; i >= end; i+= step){
//             result.push(i);
//         } 
//    }
//    else{
//         for(i = start; i <= end; i += step){
//             result.push(i)
//         }
//    }
//    return result;
// }
// console.log(stepInArr(1,10,2))
// console.log(stepInArr(5,2,-1))

function reverseArr(arr){
    result =[]
    for(i = arr.length - 1; i >= 0; i-- ){
        result.push(arr[i])
    }
    return result
}

function reverseArrayInPlace(arr2) {
    var half = Math.floor(arr2.length / 2);
    for (var i = 0; i < half; i++) {
      var temp = arr2[arr2.length - 1 - i];
      arr2[arr2.length - 1 - i] = arr2[i];
      arr2[i] = temp;
    }
    return arr2;
  }
console.log(reverseArrayInPlace([1,2,3,4,5]))