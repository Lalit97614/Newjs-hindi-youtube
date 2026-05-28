function setUserName(username){
this.username =username ;
console.log(`Hello my name is ${this.username}`)
}
function createUser(username ,email,password){
    setUserName.call(this,username);
    this.email=email;
    this.password=password;
}
const chai =  new createUser("Amit","amit@gmail.com","9985934");
console.log(chai)