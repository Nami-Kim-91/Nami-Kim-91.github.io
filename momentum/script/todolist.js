const TODOS_KEY = "todos";
let todo_list = [];  //{id,input.value}
const todoForm = document.querySelector("#todoForm");
const inputTodo = document.querySelector("#todoForm>input");
const ulTodo = document.querySelector("#todoList");

const storageSave = ()=>{
  const strObj = JSON.stringify(todo_list);
  localStorage.setItem( TODOS_KEY, strObj );
}
const storageLoad = ()=>{
  return localStorage.getItem( TODOS_KEY );
}
const saveTodoList = (num,txt,flag) => {
  const obj = { id:num, value:txt , check:flag };
  todo_list.push(obj);
  storageSave();
}

const handerDelBtn = (event)=>{
  const delID = event.target.parentElement.id;
  // console.log( delID );
  todo_list = todo_list.filter( (item)=> {
    return delID != item.id;
  });
  event.target.parentElement.remove();
  storageSave();
}
const updateCheckBox = (id,check)=>{
  // todo_list = todo_list.map( (item)=>{
  //   if( item.id == id ){
  //     return { ...item, check };
  //   }
  //   return item;
  // } );
  /**
   * id를 비교를 하고, id가 같은 항목ㅇ르 찾아서 check여부를 변경
   */
  for( let i = 0 ; i< todo_list.length ; i++ ){
    if( todo_list[i].id == id ){
      todo_list[i].check = check;
      break; //필요항목을 찾았으면 이제 그만
    }
  }
  storageSave();
}
const handlerCheck = (event)=>{
  //this와 같은 역할
  const chageID = event.target.parentElement.id;
  const check = event.target.checked;
  updateCheckBox(chageID,check);
}
const addTodoList = (id,value,check)=>{
  const li = document.createElement("li");
  li.id = id;
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = check;  
  input.addEventListener("change",handlerCheck);
  const span = document.createElement("span");
  span.textContent = value;
  const btn = document.createElement("button");
  btn.innerHTML = "&times;";
  btn.className = "todo-btn";
  btn.addEventListener("click",handerDelBtn);  
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(btn);
  ulTodo.appendChild(li);
  //todo_list 배열 추가 및 로컬스토리지에 저장
  saveTodoList(id,value,check);
}
const handlerTodoSubmit = (event)=>{
  event.preventDefault();
  let value = inputTodo.value;
  inputTodo.value = null;
  addTodoList(Date.now(),value,false);
}
const todo_init = ()=>{
  let loadTodos = storageLoad();
  if( loadTodos ) {
    const obj = JSON.parse( loadTodos );
    obj.forEach( (item) => {
      addTodoList( item.id, item.value, item.check );
    });
  }
  todoForm.addEventListener("submit",handlerTodoSubmit);
}
todo_init();

