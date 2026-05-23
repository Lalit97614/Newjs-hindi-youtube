let myName = "Lalit      "
let myChannel = "chai   "
console.log(myName.trim().length)


// console.log(myName.truelength())


let myHeroes=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
getSpiderPower:function(){
   console.log(`spidy power is ${this.spiderman}`)
}
}

Object.prototype.hitesh=function(){
   console.log(`hitesh is present in all objects`) ;
}


heroPower.hitesh()
myName.hitesh()
myHeroes.hitesh()



Array.prototype.heyHitesh=function(){
    console.log('Hitesh says hello');
}
myHeroes.heyHitesh()
// heroPower.heyHitesh() //not work because it not an array



//inheritence 
const User={
name :"chai",
email:"cjai@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvilable:false
}
const TASupport={
    makeAssignment:"Js Assignment",
    fulltime:true,
    __proto__:TeachingSupport
}



// mordern Syntex

Object.setPrototypeOf(TeachingSupport,Teacher)


const anotherUserName="ChaiOrCode    "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`)
}
anotherUserName.trueLength()
"lalit    ".trueLength()
