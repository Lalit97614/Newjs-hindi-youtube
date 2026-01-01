// const userEmail="Lalit@gmail.com"
// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Do not have user mail")
// }

// falsy value
// false,0,-0,BigInt 0n,null,undefined,NaN,""

// truethy value
// "0","false"," ",[],{},function(){}


const userEmail=[]
// if (userEmail.length==0) {
//     console.log("Array is Empty")
// }

const emptyobj ={}
if (Object.keys(emptyobj).length==0) {
    console.log("obj is empty")
}


// Nullish  Coalescing Operator (??):null undefined
let val1;
// val1=5??10
// val1 = null??10
 
// val1 =undefined ??45
// val1 =null??10??11


// console.log(val1)


//Terniary Operator 
// condition ? true : false 

const iceTeaPrice =100
iceTeaPrice <=80?console.log("less than 80"):console.log("more than 80")
