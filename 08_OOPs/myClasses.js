class user{
    constructor(username , email, password){
        this.username = username ;
        this.email=email;
        this.password=password;
    }
    enpryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("Lalit","lalit@gmail.com",123)
console.log(chai.enpryptPassword())
console.log(chai.changeUserName())



//behind the Sceen 
function User(username ,email,password){
    this.username=username ;
    this.email=email;
    this.password=password;
}
User.prototype.enpryptPassword=function(){
     return `${this.password}abc`
}
User.prototype.changeUserName=function(){
   return `${this.username.toUpperCase()}` 
}
const tea = new User("Lalit","lalit@gmail.com",123)
console.log(tea.enpryptPassword())
console.log(tea.changeUserName())