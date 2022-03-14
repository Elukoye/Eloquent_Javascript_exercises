// function countBs(word){
//     let counter = 0;
//     for(var i = 0; i < result.length; i++){
//         if(word.charAt(i) == result[i].toUpperCase()){
//             counter += 1;
//         }
//     }
//     return counter
// };
// console.log(countBs('BBC'));

// part two
function countChar( word,char){
    let count = 0;
    for(i = 0; i < word.length; i++){
        if(word.charAt(i) == char){
            count += 1;
        }
    }
    return count;
};
console.log(countChar("kakkerlak", "k"));