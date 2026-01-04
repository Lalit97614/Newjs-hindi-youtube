const mynums=[1,2,3,4,5,6]
const myTotal=mynums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and currval ${currval}`)
    return acc+currval
},0)
console.log(myTotal)
   const myCourse =[
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"java course",
        price:1000
    },
    {
        itemname:"JS course",
        price:599
    },
    {
        itemname:"HTML course",
        price:299
    },
    {
        itemname:"C++ course",
        price:900
    }
   ]

const totalPrice=myCourse.reduce((acc,avv)=>acc+avv.price,0)
console.log(totalPrice)