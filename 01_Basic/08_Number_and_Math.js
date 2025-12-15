//Numbers---->
const score1 = 400
console.log(score1)

const score2= new Number(100)
console.log(score2)
console.log(score2.toString().length)
console.log(score2.toFixed(2))
console.log(score2.toString().split())



const othervalue=22.8966
console.log(othervalue.toPrecision(3))


const value=122.8966
console.log(value.toPrecision(3))


const hundreds=1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))


// MATHS----->

console.log(Math.PI)
console.log(Math.abs(-8))
console.log(Math.round(4.6))
console.log(Math.ceil(3.9))
console.log(Math.floor(4.7))
console.log(Math.min(2,4,5,3,9))
console.log(Math.max(4,6,4,2,7,8))

console.log((Math.random()*10)+1)


const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min)