// promise
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

friedRicePromise.then((myfriedRice)=>{
    console.log(myfriedRice);
})
.catch((error)=>{
    console.log(error);
})

//promise + settimeout
setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")
// callback queue -> settimeout
// 
// global execution context - 1. script start
//                            2. for loop
//                            3. script end
//                            4. promise  ->  priority more
//                            5. settimeout -> less








// ==================   promise chaining   =================

// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method always return a promise


function myPromise(){
    return new Promise((resolve, reject)=>{
      resolve("foo");
    })
  }
  
  myPromise()
    .then((value)=>{
      console.log(value);
      value += "bar";
      return value
    })
    .then((value) =>{
      console.log(value);
      value += "baaz";
      return value;
    })
    .then(value=>{
      console.log(value);
    })
  