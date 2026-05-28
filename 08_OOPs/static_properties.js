class User{
    constructor(username){
     this.username=username;
    }
    logMe(){
        console.log(`UserName : ${this.username}`)
    }
    static createId(){
        return `123`;
    }
}
const hitesh = new User("hitesh")
console.log(hitesh.createId())   //not working


class Teacher extends User{
    constructor(username ,email){
      super(username);
      this.email=email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
// console.log(iphone.createID())    //not working