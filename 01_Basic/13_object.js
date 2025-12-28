// const tinderUser = new Object()     //singleton object 
  
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name ="Lalit"
tinderUser.isloggedIn=false

// console.log(tinderUser)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname :"Lalit",
            lastname:"Kumar"
        }
    }
}

// console.log(regularuser)
// console.log(regularuser.fullname.userfullname.lastname)


const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}

// console.log(obj3)


const users=[
    {
      id:1,
      email:"lalit@gmail"  
    },
    {
        name:"lait",
        course:"btech"
    },{

    }  
]
// console.log(users[0].email)




console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLogged"))