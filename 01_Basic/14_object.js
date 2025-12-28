const course ={
    coursename:"js in hindi",
    price:"999",
    courseteacher:"Hitesh"
}

// course.courseteacher

// const {courseteacher}=course
// console.log(courseteacher)

const {courseteacher:teacher}=course
console.log(teacher)