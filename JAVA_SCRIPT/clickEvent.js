// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log("clicked me!!!!!!");
// })

// const allButton = document.querySelectorAll("button");
// allButton.addEventListener("click",function(){
//     console.log("clicked me!!!!!!");
// })


// const allButtons = document.querySelectorAll(".my-buttons button");

// we can use all loops

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log("you clicked me!!!");
//         console.log(this.textContent)
//         console.dir(this)
//     })
// }


// for(let button of allButtons){
//     button.addEventListener("click",()=>{
//         console.log("you clicked me!!!");
//         console.log(this.textContent) // undifined
//         console.dir(this) // window 
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this)
//     })
// })


//------------------------------------------------------------------------------------------------------------>>>>>>>>>>
// event object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log(this);
// })

// whenever we add the eventListerner to any element than
// js engine ->> execute the code line by line
// browser has ->> js engine + extera feature
// browser has ->> js engine + web API

// whenever browser know that user [perform the action]
// browser perform two things
// 1.) browser give the callback function to js engine
// 2.) browser give the information in terms of object of the event that is happens with callback function

// const allButtons = document.querySelectorAll(".my-buttons button");
// // we can use arrow function because we can take argument
// for(let button of allButtons){
//     button.addEventListener("click",(event)=>{
//         console.log(event) // information
//         console.log(event.currentTarget)
//         //here we can use target and currentTarget but both are different 
            
//     })
// }

//------------------------------------------------------------------------------------------------------------>>>>>>>>>>
// console.log("script start !!!!!")
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<= 100000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 10000000; i++){
//     outerVar += i;
// }
// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!")

// task
const allbuttons = document.querySelectorAll(".my-buttons button");
// console.log(allbuttons.length);

allbuttons.forEach(function(button){
    button.addEventListener("click",(e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "#000";
        e.target.style.color = "#fff";
    })
})
