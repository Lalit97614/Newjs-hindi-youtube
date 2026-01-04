const coding = ["js","ruby","java","python","cpp"]

// const value =coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(value)


// const myNums=[1,2,3,4,5,6,7,8,9]
// const value=myNums.filter((num)=>{
// return num>4
// })
// console.log(value)


// const NewNums=[]
// myNums.filter((nums)=>{
// if(nums>4){
//     NewNums.push(nums)
// }
// })
// console.log(NewNums)
const books=[
    {
        title:"Books one",genre:"Science",publish:2009,edition:2012
    },
    {
        title:"Books two",genre:"Math",publish:2007,edition:2014
    },
    {
        title:"Books three",genre:"Hindi",publish:2005,edition:2016
    },
    {
        title:"Books four",genre:"English",publish:2009,edition:2016
    },
    {
        title:"Books four",genre:"English",publish:2009,edition:2016
    }
]
// const userBooks = books.filter((item)=>{
//     if(item.genre=="English"){
//         return item;
//     }
// })
// console.log(userBooks)


const userBooks=books.filter((item)=>{
    if(item.publish==2009){
        return item
    }
})
console.log(userBooks)