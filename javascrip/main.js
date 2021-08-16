
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const todos = []
const todoList = $(".todo__list")
const todoBtn = $(".todo__btn")
const todoInput = $(".todo__input")
const todoError = $(".error")

todoBtn.onclick = function(){
    const value = todoInput.value
    if(value.trim()){
        app.add(value)
        todoInput.value = ""
        todoInput.focus()
    }else{
        todoError.style.display = "block"
    }
}

todoInput.onkeydown = function(){
    todoError.style.display = "none"
}

// todoItem.onclick = function(){
//     console.log(todoItem)
// }

const app = {
    add(value){
        todos.push(value)
        this.render()
    },
    romove(index){
        todos.splice(index, 1)
        this.render()
    },
    render(){
        const that = this
        const html = todos.map((todo,index) => 
            `<li class="todo__item">
                <input type="checkbox" name="" id="" class="todo__item--input">
                ${todo}
                <i class="todo__item--delete" data-index="${index}"></i>
            </li>`
        ).join("")
        todoList.innerHTML = html
        todoDelete = $$(".todo__item--delete")
        Array.from(todoDelete).forEach( function(deleteItem){
            deleteItem.onclick = function(){
                const deleteIndex = deleteItem.dataset.index
                that.romove(deleteIndex)
            }
        })
    }
}

todoBtn.onclick = function(){
    const value = todoInput.value
    if(value.trim()){
        app.add(value)
        todoInput.value = ""
        todoInput.focus()
    }else{
        todoError.style.display = "block"
    }
}

todoInput.onkeydown = function(e){
    todoError.style.display = "none"
    if(e.code === "Enter"){
        todoBtn.onclick()
    }
}
