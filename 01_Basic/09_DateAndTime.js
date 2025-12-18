let mydate = new Date();
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toTimeString())
// console.log(mydate.toUTCString())



// let mycreateddate = new Date(2023,0,23)
// console.log(mycreateddate.toDateString())


// let mycreateddate = new Date(2023,0,23,5,3)
// console.log(mycreateddate.toLocaleString())

// let mycreateddate = new Date("2023-01-14")
// console.log(mycreateddate.toLocaleString())

let mycreateddate = new Date("01-14-2023")
// console.log(mycreateddate.toLocaleString())


let mytimeStamp=Date.now()

// console.log(mytimeStamp);
// console.log(mycreateddate.getTime());

// // in second
// console.log(Math.floor(Date.now()/1000))

let newdate= new Date()
// console.log(newdate)
// console.log(newdate.getDay())
// console.log(newdate.getDate())
// console.log(newdate.getFullYear())
// console.log(newdate.getHours())
// console.log(newdate.getMonth())
// console.log(newdate.getTime())



newdate.toLocaleString('default',{
    weekday:"long",
})