
// var favouriteBooks = [];
// function addFavoriteBook(bookName){
//     if(!bookName.includes('Great')){
//         favouriteBooks.push(bookName);
//     }
// }
// addFavoriteBook('A song of Ice and Fire')
// addFavoriteBook('The Great Gatsby')
// addFavoriteBook('Crime and Punishment')
// addFavoriteBook('Great Expectations')
// addFavoriteBook('You Dont Know Js')

// function printFavouriteBooks(){
//     for( let i = 0; i < favouriteBooks.length; i++){
//         console.log(`Favourite Books: ${favouriteBooks[i]}`)
//     }
// }

// printFavouriteBooks()

var v;
// console.log(typeof v)
// var v = 1
// console.log(typeof v)
// var v = "1"
// console.log(typeof v)
// var v = true
// console.log(typeof v)
// var v = {};
// console.log(typeof v)
// var v = Symbol();
// console.log(typeof v)
// var v = null
// console.log(typeof v)
// var v = function(){}
// console.log(typeof v)
// var v = [1,2,3]
// console.log(typeof v)

// var a = "5";
// var b = 1;
// var c = a - b ;
// console.log(c)
// console.log(typeof c)

// console.log(false !== 0)
// console.log(false === 0)

// let num = 0;
// while(num <= 12){
//     console.log(num);
//     num += 2;
// }

// let yourName;
// do{
//     yourName = prompt("Who are you?");
// }while (!yourName);
// console.log(yourName)
// let result= "#";
// for(let counter =0; counter< 7; counter++){
//     result += "#"
//     console.log(result)
// }

// let str = "abcd";
// console.log(str.length)

/* fizzbuzz*/
//print 1-100
// if num is divisible by 3 sub with fizz
//if num is divisible by 5 sub with buzz


for (let i = 1; i < 100; i ++){
    if (i% 5 == 0 && i % 3== 0){
        console.log("fizzbuzz");
    }
    else if (i % 3 == 0){
        console.log("fizz");  
    }
    else if( i% 5 == 0){ 
        console.log("buzz");
    }
    else{
        console.log(i);
    }
    
}