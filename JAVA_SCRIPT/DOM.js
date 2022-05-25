// select element using getelementby id property

// console.log(document.getElementById("main-heading")
// console.log(typeof document.getElementById("main-heading"))

//------------------------------------------------------------------------------------>>>>>
// select element using queryselector property

// const mainheading  = document.querySelector("#main-heading")
// console.log(mainheading)
// const header = document.querySelector(".header");
// console.log(header)
// const navitem = document.querySelector(".nav-item");
// console.log(navitem)
// const navitemAll = document.querySelectorAll(".nav-item");
// console.log(navitemAll)

//------------------------------------------------------------------------------------>>>>>
//change text by textcontent property and innertext property

// const mainheading  = document.getElementById("main-heading")
// console.log(mainheading.textContent)

// mainheading.textContent = "hello Everyone "
// console.log(mainheading.textContent)


// const mainheading  = document.getElementById("main-heading")
// console.log(mainheading.innerText)


//------------------------------------------------------------------------------------>>>>>
// change the style of element 

// const mainheading = document.querySelector("div.headline h2");
// console.log(mainheading);
// mainheading.style.backgroundColor = "blue"
// mainheading.style.border = "20px solid green"

//------------------------------------------------------------------------------------>>>>>

// set and get  -> a,name,class,id,text,placeholder,value,type all are attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));

// link.setAttribute("href", "https://youtube.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"))

//------------------------------------------------------------------------------------>>>>>

// get multiple element using getElement by class name
// get multiple element using queryselector

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems)           // HTML Collection
// console.log(navItems[1])
// console.log(Array.isArray(navItems))

// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems)            // NodelList
// console.log(navItems[1])
// console.log(Array.isArray(navItems))


//------------------------------------------------------------------------------------>>>>>
// for loop - simple,for of loop but not use forEach loop
// for using for each loop we have convert html collection to Array 
// let navItems = document.getElementsByTagName("a");
// console.log(navItems) 

// for(let i =0;i<navItems.length; i++){
//     console.log(navItems[i])

//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff" 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// for(let navItem of navItems){
 
//     navItem.style.backgroundColor = "#fff" 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems = Array.from(navItems);
// navItems.forEach((navItem)=> {
//     navItem.style.backgroundColor = "#fff" 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

//------------------------------------------------------------------------------------>>>>>
// we have used all loop in nodellist
// const navItems = document.querySelectorAll("a");
// console.log(navItems)
// for(let i =0;i<navItems.length; i++){
//     // console.log(navItems[i])

//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff" 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
 
    // navItem.style.backgroundColor = "#fff" 
    // navItem.style.color = "green";
    // navItem.style.fontWeight = "bold";
// }

// navItems.forEach((navItem)=> {
//     navItem.style.backgroundColor = "#fff" 
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

//------------------------------------------------------------------------------------>>>>>

// innerHtml -> inside header and inside div
// const headline = document.querySelector(".headline");
// console.log(headline)
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner Html Changed</h1>";
// console.log(headline.innerHTML);
// headline.innerHTML +=  "<button class = \"btn\" > Learn more or more</button>"
// console.log(headline.innerHTML);


//---------------------------------------------------------------------------------------->>>>>
// 112.
const sectionTodo =  document.querySelector(".section-todo");
console.log(sectionTodo);

// how to add clasess by javascript
// sectionTodo.classList.add('bg-dark');

// how to remove clasess by javascript
// sectionTodo.classList.remove("bg-dark");

// how to check clasess are exists or not by javascript
// const ans = sectionTodo.classList.contains("bg-dark");
// console.log(ans)

// toggle - if class exits than remove
//        - if not exists than add

// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");


//---------------------------------------------------------------------------------------->>>>>
//113.
// innerHtml to add hlml Element

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>change new todo1</li>"; // can't add element that type because performance will be bad
// todoList.innerHTML += "<li>change new todo2</li>";
// todoList.innerHTML += "<li>change new todo3</li>";
// when we should use ->> if you want to change whole inner html
// when we should not use ->> if you want to add new  inner html

//---------------------------------------------------------------------------------------->>>>>
// for adding new Element 1.document.createElement()  2. append  3.prepend  4. remove
// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("hello everyone");
// newTodoItem.textContent = "hello everyone";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem) // add at last
// todoList.prepend(newTodoItem) // add at first
// console.log(newTodoItem);

// remove
// const doThisDoThat = document.querySelector('.todo-list .text');
// doThisDoThat.remove();
// console.log(doThisDoThat);

//---------------------------------------------------------------------------------------->>>>>
// before  and after
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("hello everyone");
// newTodoItem.textContent = "hello everyone";
// const todoList = document.querySelector(".todo-list");
// // todoList.before(newTodoItem); // this is outside of todolist that's why there is no styling
// todoList.after(newTodoItem);    //this is outside of todolist that's why there is no styling

//---------------------------------------------------------------------------------------->>>>>
// 114.

// elem.insertAdjacentHtml(where,html)
// beforeend - like append
// afterbegin - like prepend
// beforebegin - like before
// afterend - like after

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li>hello good morning</li>")

//---------------------------------------------------------------------------------------->>>>>
// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "hiiiiiiiiii";
// const li2 = li.cloneNode(true);//true for deep cloning
// ul.append(li)
// ul.prepend(li2)



//---------------------------------------------------------------------------------------->>>>>
// 117. some old method to support poor internet Intregrate
// 1.append child    

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "hiiiiiiiiii";
// ul.appendChild(li)

// 2.insertBefore
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const refereceNode = document.querySelector(".first-todo");
// li.textContent = "hiiiiiiiiii";
// ul.insertBefore(li,refereceNode);

// 3.replaceChild 
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const refereceNode = document.querySelector(".first-todo");
// li.textContent = "hiiiiiiiiii";
// ul.replaceChild(li,refereceNode);

// 4.removeChild
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const refereceNode = document.querySelector(".first-todo");
// li.textContent = "hiiiiiiiiii";
// ul.removeChild(refereceNode)

//---------------------------------------------------------------------------------------->>>>>

// static list ->> taken by querySelectorAll
// live list ->> taken by getElementBySomething
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi =  document.createElement("li");
// sixthLi.textContent = "item6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);

// live list ->> taken by getElementBySomething
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// const sixthLi =  document.createElement("li");
// sixthLi.textContent = "item6";
// ul.append(sixthLi);
// console.log(listItems);



//---------------------------------------------------------------------------------------->>>>>
// how to get the dimention of the element ->>  //height and width

// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
// const info_h = sectionTodo.getBoundingClientRect().height;
// const info_w = sectionTodo.getBoundingClientRect().width;
// const info_t = sectionTodo.getBoundingClientRect().top;
// console.log(info);
// console.log(info_h);
// console.log(info_w);
// console.log(info_t);


//---------------------------------------------------------------------------------------->>>>>
// intro to Events - like button click kiya, hover kiya - action perform ho
// 1.mouse events - most important click property
// there are three way to add envent-

// 1. first way ->> <button class="btn btn-headline" onclick="console.log('clicked me!!!!!!!!!')">Learn More</button>

// 2. second way->>
// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("clicked me !!!!!!!!!!!");
// }

// 3. third way ->> // method addEventListener
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("you clicked me !!!!!!!!!")
// })

// btn.addEventListener("click",()=>{
//     console.log("you clicked me arrow function !!!!!!!!!")
// })


//---------------------------------------------------------------------------------------->>>>>
// this keyword

// in case of normal fuction value of this is "selected element"
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//     console.log("you clicked me !!!!!!!!!")
//     console.log(this);
// })

// in case of arrow fuction value of this is "window object"
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",()=>{
//     console.log("you clicked me !!!!!!!!!")
//     console.log(this);
// })

//---------------------------------------------------------------------------------------->>>>>
// keypress event
// mouseover event
// const body = document.body;

// body.addEventListener("keypress", (e) => {
//     console.log(e);
//     console.log(e.key);
// });
// const mainButton = document.querySelector(".btn-headline");
// // console.log(mainButton);
// mainButton.addEventListener("mouseover",()=>{
//     console.log("mouseover event occured!!");

// })

// mainButton.addEventListener("mouseleave",()=>{
//     console.log("mouseleave event occured!!");

// })



//---------------------------------------------------------------------------------------->>>>>
// 1. event bubbling // propagation
// 2. event captureing
// 3. delegation

