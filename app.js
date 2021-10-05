// 	AUTHOR:		SHAMIM BIN NUR
// 	GITHUB:		https://github.com/shamimbinnur
// 	LINKEDIN:	https://www.linkedin.com/in/shamimbinnur
// 	MAIL:		iamshamimbn@gmail.com
// 	SITE:		www.shamimbinnur.me


const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter-todo");

//Ad Event
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);




//functions
function addTodo(event){
    event.preventDefault();
    
    //toDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo_item");
    todoDiv.appendChild(newTodo);

    //check button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></>' ;
    completeButton.classList.add("complete_button");
    todoDiv.appendChild(completeButton);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></>' ;
    deleteButton.classList.add("del_button");
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    todoInput.value = '';
}


function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "del_button"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] === "complete_button"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;

    

    todos.forEach(function(todo){
        switch(e.target.value){
            case "All":
                if(todo.classList){
                    todo.style.display = "flex";
                }
                break;
            case "Completed":
                if(todo.classList){
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none"; 
                    }
                }
                break;
                case "Uncompleted":
                    if(todo.classList){
                        if(!todo.classList.contains("completed")){
                            todo.style.display = "flex";
                        }else{
                            todo.style.display = "none"; 
                        }
                    }
                break;
        }
    })

}
