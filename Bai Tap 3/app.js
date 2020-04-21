'use strict';
const form= document.querySelector('#my-form');
const todoText=document.querySelector('.textTodo');
const btn= document.querySelector('.btn');
const list = document.querySelector('#listTodo');


function appendItem(todo){
    let li =document.createElement('li');
       if (todo !== '') {
   	
       li.innerHTML = `
          <input type="checkbox"  class="cbox" />
          <span>${todo}</span>
          <span class='closeItem'  >X</span>
        `
        listTodo.appendChild(li);
        removeItem();
   }      
}
document.addEventListener('DOMContentLoaded', () => {
	 removeItem();
	 getTodos().map((todo) => {

	 appendItem(todo);
	})
	 changeCheckbox();
});
btn.addEventListener('click', (event) => {
   event.preventDefault();
   
   if (todoText.value !== '') {
    appendItem(todoText.value);
    addTodo(todoText.value);
    todoText.value='';
   }
   
})
function getTodos() {	
	let todos = [];
	if (localStorage.getItem('todoList') === null) {
		todos = []
	}else{
		todos = JSON.parse(localStorage.getItem('todoList'));
	}
	return todos;
}
function addTodo(todo){
	let todos = getTodos();
	todos.push(todo);
	localStorage.setItem('todoList', JSON.stringify(todos));
}

var flag = true;
function removeItem(){
     var btn = document.getElementsByClassName("closeItem");
    for(var i = 0; i < btn.length; i ++){
        btn[i].addEventListener("click",function(){
            removeFromlocalStorage(i);
            this.parentElement.remove();
        })
    }
}
function removeFromlocalStorage(i)
{
    if(flag){
    	let todos = getTodos();
        console.log(i-1);
        todos.splice(i-1,1);
        localStorage.setItem('todoList',JSON.stringify(todos));
        flag = false;
        location.reload()
    }  
}

function changeCheckbox(){
    var checkbox = document.getElementsByClassName("cbox");

    for(var i = 0; i < checkbox.length; i++)
    {
        checkbox[i].addEventListener( 'change', function() {
            if(this.checked) {
                this.parentElement.style.textDecoration = "line-through";
            } else {
                // Checkbox is not checked..
                this.parentElement.style.textDecoration = "none";
            }
        });
    }
}