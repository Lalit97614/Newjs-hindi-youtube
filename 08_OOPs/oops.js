const user={
    username:"Lalitumar",
    loginCount:8,
    signedIn:true,
    getUserdetails:function(){
        // console.log("Got user details from dataBase");
        console.log(`Username:${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserdetails())
console.log(this)




function User(username,logInCount,isLoggedIn){
    this.username=username;
    this.logInCount=logInCount;
    this.isLoggedIn=isLoggedIn;
    return this;
}
const userOne = new User("Lalit",23,true);
const userTwo = new   User("Amit",23,false);
console.log(userOne)
