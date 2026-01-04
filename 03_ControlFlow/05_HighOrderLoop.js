//[{},{},{}]

// const arr = [1,2,3,4,5,6,7]
// for(const key of arr){
//     console.log(key)
// }


// const greetings="Hello World"
// for(const key of greetings){
//     console.log(key)
// }

//Maps 
const map = new Map()
map.set("IN","India")
map.set("USA","United state of India")
map.set("FR","France")
// console.log(map)

// for(const [key,value] of map){
//     console.log(key ,":-",value)
// }

// const myObject ={
//     "game1":"NFS",
//     "game2":"Spiderman"
// }
// for(const [key,value] of myObject){     //not working 
//     console.log(key,":-",value)
// }



// const myobject ={
//     js:"JavaScript",
//     cpp:"C++",
//     rb:"Ruby",
//     jv:"Java"
// }
// for(const key in myobject){
//     console.log(`&{key} shortform of ${myobject[key]}`)
// }


const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(key)
}