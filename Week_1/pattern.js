// pattern question

// 1. print 20 Number

// function createPattern(numberOfRows) {
//     for (var i=0; i<numberOfRows; i++){
// // console.log(i)
//     }
// }

// createPattern(20)

// print star pattern

// function createPattern1 ( numberOfRow1) {
//     for ( var i =0; i< numberOfRow1; i++){
//         var stringToPrint = "";
//         for (var j =0; j <i+1; j++){
//             stringToPrint = stringToPrint + "*"
//         }
//         console.log(stringToPrint)
//     }
// }

// createPattern1 (10)

//2nd pattern printing 

function createPattern2 ( numberOfRow2){
    for ( var i=0; i<numberOfRow2; ++i){
        var stringToPrint1 = "";
        for ( var j=0; j<i+1; ++j){
            stringToPrint1 = stringToPrint1 + "@** , *"
        }
        console.log(stringToPrint1)
    }
}
createPattern2 (20)