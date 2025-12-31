const  user={
    username:"Lalit",
    price:999,
    welcomeMassage:function(){
        console.log(`${this.username} ,Welcome to website`)
        // console.log(this)
    }
}
// user.welcomeMassage()
// user.username="Anchal"
// user.welcomeMassage()


// function chai(){
//     let username="hitesh"
    // console.log(this.username)    //we cannot do this
// }
// chai()


// const chai=function(){
//    let username="hitesh"
//     console.log(this.username)    //we cannot do this 
// }




// Arrow function

const chai=()=>{
   let username="hitesh"
    console.log(this.username)    
}
// chai()



// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(7,9))


// const addTwo=(num1,num2) =>  num1+num2
const addTwo=(num1,num2) =>  (num1+num2)
console.log(addTwo(7,9))


const user3=()=>({username:"Lalit"})
console.log(user3())