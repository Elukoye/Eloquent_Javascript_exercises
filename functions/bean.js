function countBs(word){
    let result = [...word]
    let counter = 0;
    for(var i = 0; i < result.length; i++){
        if(result[i] == result[i].toUpperCase()){
            counter += 1;
        }
    }
    return counter
};
console.log(countBs('BBC'));