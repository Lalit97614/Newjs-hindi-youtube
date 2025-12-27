// singleton
// object.create

const mySym=Symbol("kay1")

// Object literals
const jsuser = {
    name:"Lalit",
    "full name":"Lalit Rajpoot",
    // mySym:"mykey1"
    [mySym]:"mykey1",
    age:18,
    location:"Dibai",
    Email:"lalitrajpoot@gmail.com",
    isLoggedIn:false,
    lastLogindays:["Monday","Saturday"]
}
// console.log(typeof(jsuser))


// console.log(jsuser.Email)
// console.log(jsuser["name"])

// console.log(jsuser."full name")   ---->not possible
// console.log(jsuser["full name"])    //correct way

// console.log(jsuser[mySym])

jsuser.Email="lalitrajpoot976148@gmail.com"
// Object.freeze(jsuser)   //now no change
jsuser.Email="lalitrajpoot123@gmail.com"
// console.log(jsuser.Email)

// console.log(jsuser)


jsuser.greeting = function(){
    console.log("Hello JS Users")
}
console.log(jsuser.greeting())

jsuser.greetingTwo = function(){
    console.log(`Hello JS Users, ${this.name}`)
}
console.log(jsuser.greetingTwo())