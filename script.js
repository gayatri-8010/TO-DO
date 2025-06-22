const todoInput = document.getElementById("todo-input");
const todosParent = document.getElementById("todos");

function addTodo() {
  const div = document.createElement("div");
  const para = document.createElement("p");
  const button = document.createElement("button");
  const button2=document.createElement("button");

  const todoId= Date.now();
 
  div.id=todoId
  button.setAttribute("onclick",`deleteTodo(${todoId})`);
  button2.setAttribute("onclick",`completed(${todoId})`);
  button.innerText = "Delete";
  para.innerText = todoInput.value;
  button2.innerText="completed";

  div.append(para, button,button2);
  todosParent.appendChild(div);
}
  function deleteTodo(todoId){
    const el=document.getElementById(todoId);
    el.remove();
  }

  function completed(todoId){
  const el2=document.getElementById(todoId);
  el2.classList.toggle("complete");
  }
