const coding =["js","cpp","java","python","js"]
//  coding.forEach(function(key){
//     console.log(key)
//  });


// coding.forEach((name)=>{
//     console.log(name)
// })



// function lan(name){
//     console.log(name)
// }
// coding.forEach(lan)


// coding.forEach((item,index,arr0)=>{
//    console.log(item,index,coding)
// })


const mycoding=[
    {languageName:"JavaScript",
     languageFileName:"js"
    },
    {languageName:"Java",
     languageFileName:"Java"
    },
    {languageName:"Python",
     languageFileName:"py"
    },
    {languageName:"C++",
     languageFileName:"cpp"
    }
]
mycoding.forEach((item)=>{
    console.log(item)
})
mycoding.forEach((item)=>{
    console.log(item.languageFileName)
})