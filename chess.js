
/* stack overflow solution*/
// var size = 10;    
// for (var y = 0; y < size; y++) {
//     var line = ' ';

//     for (var x = 0; x < size; x++) {
//         line += (y + x + 1) % 2 ? ' ': '#';
//     }

//     console.log(line);
// }

// video reference :https://www.youtube.com/watch?v=Z7eWNwgrWTc&t=176s
var board = " ";
var boardSize = 8;
for(y = 0; y < boardSize; y ++){
    // board += y;
    for(x = 0; x < boardSize; x++){
        if((x+y) % 2 == 0){
            board += " ";
        }
        else{
            board += "# ";
        }
        
    }
    board +="\n";
}
 
console.log(board)