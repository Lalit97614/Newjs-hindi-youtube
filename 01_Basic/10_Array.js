const myArr=[0,1,2,3,4,5,6,true,"lalit"]
// console.log(myArr[6])


const myArr2 = new Array(1,2,3,4,5)


// Array method......
// myArr.push(8)
// myArr.push(78)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)


// myArr.unshift(67);
// console.log(myArr)
// myArr.shift(67);
// console.log(myArr)


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(6))


const newArr= myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof(newArr))



// slice and splice
console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ",myArr)
