// if and else condition 


// const isUserLoggedIn= true
//  if(isUserLoggedIn){

//  }
//  else{

//  }

//  Condition --- >,<,<=,>=,==,!=
// ===   check the typeof


// if(2=="2"){
//     console.log("Yes it is same ")
// }
// else{
//     console.log("No it is not same ")
// }

// if(2==="2"){
//     console.log("Yes it is same ")
// }
// else{
//     console.log("No it is not same ")
// }



// const score =200
// if(score>100){
//     const power="fly"   //if we use var then the power run out side the block
//     console.log(power)
// }
// console.log(power)


const balance =1000
// if(balance >500) console.log("test")    //implicit scope ---use one line only



// Nested if 
// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance <750){
//     console.log("less than 750")
// }
// else if(balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


const userLoggedIn=true
const debitCard=true

// if(userLoggedIn&&debitCard){   //check both condition it must be true 
//     console.log("Allow to buy course")
// }
// else{
//     console.log("you are not applicable ")
// }


if(userLoggedIn||debitCard){   //check one condition if it is true then it not check second condition 
    console.log("Allow to buy course")
}
else{
    console.log("you are not applicable ")
}
