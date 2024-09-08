let elForm = document.querySelector(".todo-form")
let elList = document.querySelector(".todo-list")

let elAllBtn = document.querySelector(".select-1")
let elCompletedBtn = document.querySelector(".select-2")
let elUnCompletedBtn = document.querySelector(".select-3")

let wrapper = document.querySelector(".img")



const todos = JSON.parse(localStorage.getItem("todos")) || []

elForm.addEventListener("submit", function(e){
    e.preventDefault()
    const inputValue = e.target.userTodo.value
    const data = {
        id:todos.length + 1,
        title:inputValue,
        isCompleted:false,
    }
    todos.push(data)
    renderTodos(todos)
    e.target.reset()
    localStorage.setItem("todos", JSON.stringify(todos))
})

function renderTodos(arr){
    elList.innerHTML = null
    arr.forEach((item, index) => {
        let elItem = document.createElement("li")
        elItem.className =  `flex ${item.isCompleted ?"line-through opacity-[50%] cursor-not-allowed" : ""} items-center bg-slate-300 p-2 rounded-md justify-between`
        elItem.innerHTML = `
                <div>
                    <strong>${index + 1}.</strong>
                    <strong>${item.title}</strong>
                </div>
                <div class="flex items-center gap-2">
                    <div onclick="handleComplatedClick(${item.id})" class="w-[22px] relative h-[22px] cursor-pointer rounded-full border-[1px] border-black">
                        <span class="absolute ${item.isCompleted ? "inset-[2px]" : ""} rounded-full bg-blue-500"></span>
                    </div>
                    <button onclick="handleUpdateTodo(${item.id})" class="bg-blue-500 text-white font-semibold p-2 rounded-md">Update</button>
                    <button onclick="handleDeleteTodo(${item.id})" class="bg-red-500 text-white font-semibold p-2 rounded-md">Delete</button>
                </div> 
        `
        elList.appendChild(elItem)
    })
    elAllBtn.children[0].textContent = todos.length
    elCompletedBtn.children[0].textContent = todos.filter(item => item.isCompleted == true).length
    elUnCompletedBtn.children[0].textContent = todos.filter(item => item.isCompleted == false).length
}
renderTodos(todos);


function handleDeleteTodo(id){
    const findeIndex = todos.findIndex(item => item.id == id)
    todos.splice(findeIndex, 1)
    renderTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
}



function handleUpdateTodo(id){
    const findObj = todos.find(item => item.id == id)
    let elNewValue = prompt(findObj.title)
    findObj.title = elNewValue
    renderTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
}



function handleComplatedClick(id){
    const complateObj = todos.find(item => item.id == id)
    complateObj.isCompleted = !complateObj.isCompleted
    renderTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function renderCompleted(status){
    if(status == "all"){
        renderTodos(todos)
    }
    else if(status == "completed"){
        const filteredArr = todos.filter(item => item.isCompleted == true)
        renderTodos(filteredArr)
    }
    else{
        const filteredArr = todos.filter(item => item.isCompleted == false)
        renderTodos(filteredArr)
    }
}


function download(input){
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (){
        let img = document.createElement("img")
        img.className = `w-[100px] h-[50px] rounded-[5px]`
        wrapper.appendChild(img)
        img.src = reader.result
    }
}







































// Execution Context - ayni damda ishlab turgan code uchun kerakli boladigan variabeslar functionlarni ozida jamlovchi object yoki block
// 1.Global EC - 1 ta main context
// 2.Function EC - bir nechta bolishi mumkin

// Phases -> 1.Creation phase, 2.Execution phase
// Creation phase => Codeni oqib chiqib ularga undefined qiymatlarini beriladi 
// Execution phase => Codelar execute boladi , variableslarga qiymat beriladi va ularni run qilib chiqadi

// let a = 5 // GEC

// function sayHello(){
//     console.log(a);
//     let b = "salom" // FEC
// }

// sayHello()
// let userAge = 16
// let userName = " Ulugbek"
// const fn = eval("userAge + userName")
// console.log(fn);


// {"Environment Record"->a:5, outer:null}
// outer -> ozidan oldingi LE ga murojaat
// let a = 5 // GEC & LE

// console.log("salom"); // GEC

// function myFunc(){ // GEC
//     // {"Environment Record"->b:"Yaxshi", outer:true}
//     let b = "Yaxshi" // FEC
//     console.log(a);
//     console.log(b);
// }
// myFunc()

// let d = 25 // GEC

// console.log(d); // GEC


// object.bind(obj)("saca")
// object.call(obj,"aas")
// object.apply(obj, ["salom"])


// Destruction -> object yoki arrayni ichida bizga kerak bolagan qiymatni ozini chaqirib olish
// 1.Object destruction
// 1.Array destruction
// let user = {
//     id:1,
//     name:"Ulug'bek",
//     age:"23",
// }
// const {name} = user
// console.log(name);

// let arr = [12, 23, 34, 45]
// const [,,,d] = arr
// console.log(d);



// let elWrapper = document.querySelector(".wrapper")
// console.log(elWrapper.lastElementChild);

// elWrapper.children[1].addEventListener("click", function(e){
//     console.log(e.target.parentElement);
// })

// let elItems = document.querySelectorAll(".item")
// elItems.forEach(item => {
//     item.textContent = "Yaxshi"
// })
