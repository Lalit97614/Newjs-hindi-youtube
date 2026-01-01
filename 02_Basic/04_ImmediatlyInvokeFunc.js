
// named IIFE

(function chai(){
   console.log(`DB CONNECTED`)
})();     //: is importent for end te function



((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})(`Lalit`);