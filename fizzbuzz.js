/* fizzbuzz*/
//print 1-100
// if num is divisible by 3 sub with fizz
//if num is divisible by 5 sub with buzz


for (let i = 1; i < 101; i ++){
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