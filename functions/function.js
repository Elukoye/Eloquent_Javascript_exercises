const makeNoise = function (){
    console.log("Ping!")
};
makeNoise();

const power = function(base, expo){
    let result = 1;
    for(count = 0; count < expo; count ++){
        result *= base;
    }
    return result;
};

console.log(power(2, 5));
console.log(result);