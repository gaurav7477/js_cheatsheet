// /*
//////////////////////////////////////////////////////////////////////////////////////////////////
// important Array method 😀

const numbers = [1,2,4,5,6];
function multiplefunc(number,index){
    console.log(`index is ${index} and number is ${number}`);
}

// for(let i=0;i<numbers.length;i++){
//     multiple(numbers[i],i);
// }

///// for each method take  as callack function
// numbers.forEach(multiplefunc);


// index is optional
numbers.forEach(function(num,index){
    console.log(index , num*3);
})

const users  = [
    {firstname:"gaurav",age:20},
    {firstname:"sourabh",age:21},
    {firstname:"umang",age:21},
    {firstname:"nitin",age:40}
]

// for(let user of users){
//     console.log(user)
//     console.log(user.firstname)
// }

users.forEach(function(user){
    console.log(user.firstname)
})

// arrow function
users.forEach(user=>{
    console.log(user.firstname)
})
users.forEach((user,index)=>{
    console.log(user.age,index)
})

// */
//////////////////////////////////////////////////////////////////////


// /*
/////////////////////////////////////////////////////////////////////////////////////////😀
// map method -->  as a input take a callback function
// map function make a new array that's why return statement is neccessary

const number = [1,2,3,4,5,6];

// const cubenumber = function(number){
//     return number*number*number;
// }
// const cube = number.map(cubenumber);
// console.log(cube)



// const cube = number.map(function(number){
//     return number*number*number;
// })
// console.log(cube)


const spuares = number.map((number,index)=>{
    return `index ${index}, ${number*number}`;
})
console.log(spuares)

const users  = [
    {firstname:"gaurav",age:20},
    {firstname:"sourabh",age:21},
    {firstname:"umang",age:21},
    {firstname:"nitin",age:40}
]
const username = users.map(user=>{
    return user.firstname
})
console.log(username)
// */   


// /*
//////////////////////////////////////////////////////////////////////////////////////
//////   filter method 😀 ->>  as a input take a callback function
//////  Always return a boolean value

const number = [1,2,3,4,5,6,7,8];

const evennumber = number.filter(number=>{
    return number%2!==0;
})
console.log(evennumber);
// */

// /*
///////////////////////////////////////////////////////////////////////////////////////😀
/////// reduce method

// accumulator - by default  first value take as a first index value
// current value - second index value  and so.. on

const number = [1,2,3,4,5];
// 100 is a initial value
const sum = number.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue;
},100)
console.log(sum);


const usercart = [
    {productId : 1234,productName : "mobile",price:16400},
    {productId : 1235,productName : "laptop",price:52000},
    {productId : 1236,productName : "cooler",price:8000},
    {productId : 1237,productName : "fridge",price:14000}
]

const totalAmount = usercart.reduce((totalprice,currentvalue)=>{
    return totalprice + currentvalue.price;
},0)
console.log(totalAmount);

// */

// /*
///////////////////////////////////////////////////////////////////////////////////////
///sort method 😀 ->>  as a input take a callback function
// sort according to ascii value
// number take as a string then sort

// const number = [34,2345,343,2,12,9];
// number.sort();
// console.log(number)    // ans : [12, 2, 2345, 34, 343, 9]


const number = [34,2345,343,2,12,9];
number.sort((a,b)=>{
    return b-a;
});
console.log(number)
// a-b ->>> 34-2345 = negative ->>> a,b
// b-a ->>> positive = b,a

// capital letter sorted first
const username = ['gaurav','aa','abcd','bcaf','ABS','ZFSFDY']
username.sort()
console.log(username)

// task ->> find price high to low and low to high

const usercart = [
    {productId : 1234,productName : "mobile",price:16400},
    {productId : 1235,productName : "laptop",price:52000},
    {productId : 1236,productName : "cooler",price:8000},
    {productId : 1237,productName : "fridge",price:14000}
]
// const lowtohigh =usercart.sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(lowtohigh)
const hightolow =usercart.sort((a,b)=>{
    return b.price-a.price;
});
console.log(hightolow)
//  */



// /*
/////////////////////////////////////////////////////////////////////////////////////
// find method 😀 as a input take a callback function

const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }
// const ans = myArray.find(isLength3)
// console.log(ans)

const ans = myArray.find((string)=> string.length === 3);
console.log(ans)


const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);
// */


// /*
//////////////////////////////////////////////////////////////////////////////////////////😀
//// every method
//// every means all element satisfy the condition

const usercart = [
    {productId : 1234,productName : "mobile",price:16400},
    {productId : 1235,productName : "laptop",price:52000},
    {productId : 1236,productName : "cooler",price:8000},
    {productId : 1237,productName : "fridge",price:14000}
]


// const ans = usercart.every(function(item){
//     return item.price < 53000;
// })
const ans = usercart.every((item)=>item.price < 51100)
console.log(ans)


// some method at least one element satisfy the condition
const ans1 = usercart.some((item)=>item.price > 51000)
console.log(ans1)


// fill method ->>  (value , start , end)

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);  // value , start , end
console.log(myArray);

// */


// /*
/////////////////////////////////////////////////////////////////////////////////////
// splice method 😀
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);

// insert 
// myArray.splice(1, 0,'inserted item');
// console.log(myArray);

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);

// */


// /*
/////////////////////////////////////////////////////////////////////////////////////😀
// iterables 😀 ->> where we can use for of loop like array, string
const name = "gaurav";
for(let char of name){
    console.log(char);
}

const array1 = [1,2,3,4,5,6];
for(let item of array1){
    console.log(item);
}
const usercart = [
    {productId : 1234,productName : "mobile",price:16400},
    {productId : 1235,productName : "laptop",price:52000},
    {productId : 1236,productName : "cooler",price:8000},
    {productId : 1237,productName : "fridge",price:14000}
]

for(let item1 of usercart){
    console.log(item1);
}

//  object is not iterable->> It Will produce error
// const usercart1 =  {productId : 1234,productName : "mobile",price:16400}
// for(let item1 of usercart1){
//     console.log(item1);
// }


// array like object 😀 ->> which has lenght property and we can access it by index like string


// */

///////////////////////////////////////////////////////////////////////////////////////////😀

// /*

// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
console.log(numbers)

if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}


for(let number of numbers){
    console.log(number);
}

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements)
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);
// */

// /*
//////////////////////////////////////////////////////////////////////////////////////////😀
// optional chaning

const user = {
    firstname :"gaurav",
    address: {house_number : 1234}
}
console.log(user)
console.log(user.firstname)
console.log(user.address)
// console.log(user.house_number)// undefiended
console.log(user?.firstname)
console.log(user?.address?.house_number)

// method and funtion inside object

// const person1 = {
//     firstName : "gaurav",
//     age: 8,
//     about: function(){
//         console.log(this.firstName,this.age)
//     }
// }
// person1.about()



function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "gaurav",
    age: 8,
    about: personInfo
}

const person2 = {
    firstName : "sourabh",
    age: 28,
    about: personInfo
}
const person3 = {
    firstName : "dipanshu",
    age: 38,
    about: personInfo
    
}
person1.about();
person2.about();
person3.about();

// */

// when we use this object in console than window object will be created
// it will create a problem so we have used strict mode for solve these problem

// console.log(window);
// console.log(this)
// console.log(window == this)

"use strict" 
function myfunc(){
    console.log(this)
}
myfunc();

//////////////////////////////////////////////////////////////////////////////////////////////😀

// /*

// methods->> call , apply , bind
// we will access all user property by one user
// 1. call
const user1 = {
    firstName : "gaurav",
    age: 38,
    about: function(favsinger,favmovie){
        console.log(this.firstName,this.age,favsinger,favmovie)
    }
    
}
const user2 = {
    firstName : "dipanshu",
    age: 68,
    about: function(hobby,favindus){
        console.log(`i am ${this.firstName} and my age is ${this.age} hobbies ${hobby}  fav_industry ${favindus}`)
    }
    
}
user1.about()
user1.about.call()     // undefined undefined
user1.about.call(user2)
user1.about.call(user1)
user1.about.call(user1,"jani","tholiprema")
user2.about.call(user2,"guitar","south")

/// second way
function about(fav_song,fav_movie){
    console.log(this.firstName,this.age,fav_song,fav_movie)
  
}

const user3 = {
    firstName : "gaurav",
    age: 21,
    
}
const user4 = {
    firstName : "dipanshu",
    age: 22,
}

about.call(user3,"bijli-bijli","bigle")
about.call(user4,"hare krishna","theri")

// apply and call are same A bit difference is in passing argument 
// call ->>  about.call(user3,"bijli-bijli","bigle")
// apply ->> about.apply(user3,["bijli-bijli","bigle"])

// 3. bind ->> it return a function so we will store this in a variable and call the function

// const myfunc = user1.about.bind(user4,"hare krishna","theri")
// myfunc();

// don't do this mistake

const myfunc = user1.about
// myfunc();



// */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////😀

// arrow function
// arrow function have not this
// it will take this by surrownding
// this ->> 1 level up - window object
// const user1 = {
//     firstName : "gaurav",
//     age: 38,
//     about:()=>{
//         console.log(this).firstName,this.age)
//     }
    
// }
// user1.about(user1);

// const user1 = {
//     firstName : "gaurav",
//     age: 38,
//     about(){
//         console.log(this.firstName,this.age)
//     }
    
// }
// user1.about();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////😀
// Proto, Prototype ,Class , OOPS
// for taking input from user and we can use this for multiple users

// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

// /*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////😀
function createUser(firstName,lastName,email,age,address){
    const user = {};

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser("gaurav","bairagi","bairagi@gmail.com",21,"my addresss")

console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(is18);
console.log(about);
// */


// /*
///////////////////////////////////////////////////////////////////////////////////////////////////////😀
// DRAWBACK ->> when we use this for multiple user for ex. 100000 user than every time method will generate object and occuipice more space(memory)

// SOLUTION OF THIS DRAWBACK

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing :function(){
        return "o oo oo oooooooooo";
    }
}

function createUser(firstName,lastName,email,age,address){
    // create {} and proto every method would be call
    const user = Object.create(userMethods);

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about // PASS REFERENCES
    user.is18 = userMethods.is18  // PASS REFERENCES
    return user;
}

const user1 = createUser("gaurav","bairagi","bairagi@gmail.com",21,"my addresss");
const user2 = createUser("sourabh","bairagi","bairagi@gmail.com",21,"my addresss");
const user3 = createUser("dipanshu","bairagi","bairagi@gmail.com",21,"my addresss");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.is18());
console.log(user2.is18());
console.log(user3.is18());
console.log(user1.sing());
console.log(user2.sing());
console.log(user3.sing());


// proto  - [[proototype]] will be same thing but prototype is different thing
// proto is a references that create a chain but prototype is a object 
// first check their own obj and if not present than check other obj
const p1 = {
    key1: "value1",
    key2: "value2"

}
const p2 = Object.create(p1)
p2.key3  = "value3"
// p2. key2 = "value2";

// console.log(p1)
console.log(p2.key2)
console.log(p2.__proto__)

// */


// /*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////😀
function hello(){
    console.log("hello world");
}

// javascript function 😀 ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property(free space for use)

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());

// */

// /*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////😀
// remove this and use function prototype

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing :function(){
//         return "o oo oo oooooooooo";
//     }
// } 

function createUser(firstName,lastName,email,age,address){
    // create {} and proto every method would be call
    const user = Object.create(createUser.prototype);

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
                return `${this.firstName} is ${this.age} years old.`;
}
createUser.prototype.is18 = function(){
            return this.age >= 18;
}
createUser.prototype.sing = function(){
            return "o oo oo oooooooooo";
} 

const user1 = createUser("gaurav","bairagi","bairagi@gmail.com",21,"my addresss");
const user2 = createUser("sourabh","bairagi","bairagi@gmail.com",21,"my addresss");
const user3 = createUser("dipanshu","bairagi","bairagi@gmail.com",21,"my addresss");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.is18());
console.log(user2.is18());
console.log(user3.is18());
console.log(user1.sing());
console.log(user2.sing());
console.log(user3.sing());
// */
