// var name = 'kumbhaj shukla';
// var age = 19;
// var user = [ 'kumbhaj ' , 'shukla' , 'object']

// console.log (age , user)

// var user1 = {
//     name:"kumbhaj",
//     class : 42
// }
// console.log (user1)

// var user1 = ['kumbhaj', 'shukla','class' , 'shujkkkk', 'hey']
// console.log (user1[0])

// console.log (user1[1])
// console.log (user1[2])
// console.log (user1[3 ])
// console.log (user1[4])
// console.log (user1[5])

//OR USING LOOP

// var user1 = ['kumbhaj', 'shukla','class' , 'shujkkkk', 'hey' , 'jsduhedujhweej']
// for (var i =0; i<5; i++){
// console.log (user1[i])
// }


// var kumbhaj= ['FirstValue','secondValue','third_value' ,'fourthValue' , 'fifth_values' , 'sixth_values']
// for (var i=0; i<2; i++){
//     console.log(kumbhaj)
// }


// console.log("Hello khushi")

// var bhai = ['khushi', 'Shukla' , 'class_8th' , 'Kumbhaj', 'shukla1' , 'shuchi' , 'shukla2']
// for (var i=0; i<7; i++){
//     console.log(bhai[3])

// }


// var khushiBhai = ['variable_1' , 'variable_2' , 'variable_3' , 'variable_4']
// console.log(khushiBhai[2,3])



// var khushi = ['hey' , 'variable2']
// console.log (khushi+ "hey its name ")


// arithmetic

function sum ( index1 , index2){
    return index1 + index2; 
}

function multiply ( index1 , index2)
{
    return index1 * index2;
}
function divide (index1 , index2){
    return index1 / index2;
}

function doArithmetic(firstEL , secondEL, arithmeticFn){
    return arithmeticFn(firstEL, secondEL)
}
var answer = multiply (100, 121)
console.log (answer)



// pattern question

//1. print 20 Number

// function createPattern(numberOfRows) {
//     for (var i=0; i<numberOfRows; i++){
// // console.log(i)
//     }
// }

// createPattern(20)

// print star pattern

function createPattern1 ( numberOfRow1) {
    for ( var i =0; i< numberOfRow1; i++){
        var stringToPrint = "";
        for (var j =0; j <i+1; j++){
            stringToPrint = stringToPrint + "*"
        }
        console.log(stringToPrint)
    }
}

createPattern1 (10)

//2nd pattern printing 

function createPattern2 ( numberOfRow2){
    for ( var i=0; i<numberOfRow2; ++i){
        var stringToPrint1 = "";
        for ( var j=0; j<i+1; ++j){
            stringToPrint1 = stringToPrint1 + "@*"
        }
        console.log(stringToPrint1)
    }
}
createPattern2 (20)