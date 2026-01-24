// const PromiseOne = new Promise(function(resolve,reject){
//     //Do an Async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//       console.log("Async task is complete")
//       resolve()
//     },1000)
    
// })
// PromiseOne.then(function(){
//     console.log("PromiseOne is consumed")
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Aysnc two resolve")
// })


// const PromiseThree = new Promise(function(resolve,reject){
//    setTimeout(function(){
//       resolve({username:"Chai",email:"Chai@chaiorcode"})
//    },1000)
// })
// PromiseThree.then(function(user){
//      console.log(user)
//      console.log(user.email)
// })



// const PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//       let error=false
//       if(!error){
//         resolve({username:"Lalit",password:"123"})
//       }
//       else{
//         reject("Error:Something went wrong")
//       }
//     },1000)
// })
// PromiseFour.then(function(user){
// console.log("Aysnc tast is resolved")
// return user.username
// }).then(function(username){
//     console.log("Aynsc task is resolved then2 ")
//     console.log(username)
// }).catch(function(){
//     console.log("Aynsc task is not resolved")
// }).finally(()=>console.log("This promise is either resolved or rejected"))





// const PromiseFive = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error=true
//       if(!error){
//         resolve({username:"java Script",password:"123"})
//       }
//       else{
//         reject("Error:JS went wrong")
//       } 
//   },1000)
// });

// async function consumePromiseFive()
//   {
//     try{
//          const response= await PromiseFive
//   console.log(response)
//     }
//     catch(error){
//       console.log(error)
//     }
 
// }
// consumePromiseFive();




// async function getAlluser(){
//   try{
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(reponse)
//     console.log(typeof reponse)
//     const data =await reponse.json()
//     //  console.log(typeof reponse)
//     console.log(data )
//   }
//   catch(e){
//      console.log("E:",e)
//   }
// }
// getAlluser();





// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(reponse){
//   return reponse.json()
// }).then((data)=>{
//   console.log(data)
// }).catch((e)=>console.log(e))



fetch("https://api.github.com/users/Lalit97614")
.then(function(reponse){
  return reponse.json()
}).then((data)=>{
  console.log(data)
}).catch((e)=>console.log(e))