// function myname(){
//     console.log("L")
//     console.log("A")
//     console.log("L")
//     console.log("I")
//     console.log("T")
// }
// myname()




function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}
// addTwoNumbers(2,3)
// addTwoNumbers(2,"8")
// addTwoNumbers(2,"a")
// addTwoNumbers(2,null)

// let result = addTwoNumbers(7,5)      //we cannot do this
// console.log(result)



function addTwoNumbers2(num1,num2){
    return num1+num2
}
let result = addTwoNumbers2(5,6)
console.log(result)



function loginUser(username="Anchal"){
    return `${username} just logged in`
}
// console.log(loginUser("Lalit"))
console.log(loginUser())


// function loginUser(username){
//     if(!username){
//         console.log("please enter a username")
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser("Lalit"))
// console.log(loginUser())