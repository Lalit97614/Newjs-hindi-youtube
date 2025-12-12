const name = "Lalit"
const repocount = 50


console.log(name + repocount+"Value ")
console.log(`Hello my name is ${name} and my re count is ${repocount}`)

// Declearation-->
const GameName = new String("helloMarry")
console.log(GameName)
console.log(GameName.toUpperCase())
console.log(GameName.toLowerCase())
console.log(GameName.length)
console.log(GameName.charAt(3))
console.log(GameName.indexOf('M'))


const newStr = GameName.substring(0,4)
console.log(newStr)

const anotherStr=GameName.slice(-8,4)
console.log(anotherStr)

const newString="     lalit    "
console.log(newString)
console.log(newString.trim())

const url="https://hitesh%20chaudary.com"
console.log(url.replace("%20" ,"-"))

console.log(GameName.split("-"))