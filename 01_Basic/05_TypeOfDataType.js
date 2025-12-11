// Datatype

// 1.Primitive Datatype
    //  There are 7 type ---> String Number, Boolean, null, undefined, 
    //  Symbol, BigInt
     
const score = 100
const scorecard = 100.3

const isLoggedIn = false 
const outsideTemp=null
let userEmail;

const id1=Symbol("123")
const id2=Symbol("123")
console.log(id1==id2)



// 2.Reference DataType(Non Primitive)
    //Array,Object,Functions

    // Array
const heroes=["Shaktiman","naagraj","doga"]
  
// Object
letmyoj={
    name:"Lalit",
    age:22
}

// function
const myfunc=function(){
    console.log("Hello World");
}


console.log(typeof(myfunc))