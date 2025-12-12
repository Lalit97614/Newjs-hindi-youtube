// Stack --->Primitive Datatype
// Heap ---->Non Primitive DataType

// stack ---->
let myYoutubename ="Lalitrajpoot"
let anothername = myYoutubename
anothername = "ChaiOrCode"

console.log(anothername)
console.log(myYoutubename)




// Heap-->
let user1 ={
    email:"Lalit@gmail.com",
    upi:"chaiOrcode"
}
let user2 =user1
user2.email="hi@gmail.com"
console.log(user1.email)
console.log(user2.email)