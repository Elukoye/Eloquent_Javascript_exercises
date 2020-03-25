// function repeatLog(n,action){
//     for(i = 0; i < n; i++){
//         action(i)
//     }
// }
// console.log(repeatLog(3,console.log));

// let labels =[];
// repeatLog(5,i =>{
//     labels.push(`unit ${i + 1}`);
// });
// console.log(labels)

function greaterThan(n){
    return function(m){
        return  m > n;
    }
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// function greaterThan(n){ 
//     return m => m > n; 
// } 
// let greaterThan10 = greaterThan(10); 
// console.log(greaterThan10(11));

// arr = [1,2,3,4,5]
// arr.forEach(element => {
//     if(element % 2 == 0){
//         console.log(element);
//     }
// });


// function multiplier(factor){
//       return x =>  factor * x;
// }

// let double = multiplier(2);
// let tripple = multiplier(3);
// console.log(double(4))
// console.log(tripple(18));

// let vals = [4,5,6,7,8]
// vals = vals.map(function(x){
//     return x * 2
// });
// console.log(vals)

// function filter(arr,test){
//     passed = [];
//     for(let el of arr){
//         if(test(el)){
//             passed.push(el);
//         }
//     }
//     return passed;
// }
// console.log(filter(arr,test))

function reduce(array, combine, start)
 { let current = start; 
    for (let element of array) { 
        current = combine(current, element); 
    } 
    return current;
 }
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))


function reduce(array, combine, start)
 { let current = start; 
    for (let element of array) { 
        current = combine(current, element); 
    } 
    return current;
 }
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))

arr = [1,2,3,4]
console.log(reduce(arr, (a,b) => a+b,0) )

