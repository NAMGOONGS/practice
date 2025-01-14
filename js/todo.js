const toDoForm=document.querySelector("#todo-form");
const toDoList=document.querySelector("#todo-list");
const toDoInput=document.querySelector("#todo-form input");

const TODOS_KEY="todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos)); 
    //JSON.stringify(변수) 입력시 스트링형태로 변경해준다
}



function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();    
    toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    saveToDos();
};

function paintTodo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo.text;

    const button= document.createElement("button");
    button.innerText="삭제하기";
    button.addEventListener("click",deleteTodo); 

    li.appendChild(button);
    toDoList.appendChild(li);
};

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
};

