const addTodoForm= document.querySelector('.add');
const list_ul=document.querySelector(".todos");
const search=document.querySelector(".search input");

//funtion that adds the newly added todo to the DOM
const addTodoList = (todo)=>{
    const html=`<li class="list-group-item d-flex justify-content-between align-item-center"><span>${todo}</span>
    <i class="fa-solid fa-trash-can delete"></i></li>`
    list_ul.innerHTML+=html;
};


addTodoForm.addEventListener('submit',(e)=>{
    //prevents page from reloading when submitting the form
    e.preventDefault();
    //Here we are getting the entered value in todo form
    //trim() -> makes the whitespaces(space) disappear
    const todo=addTodoForm.add.value.trim();
    //length of the entered value should be atleast 1
    if(todo.length){
        //calling the function that adds the new todo to the DOM
        addTodoList(todo);
        addTodoForm.reset();
    }
});

//Deleting the Todos
list_ul.addEventListener('click',e =>{
    //here check is the clicked thing is the "trash can"or not class of trach can is"delete"
    if(e.target.classList.contains('delete')){
        //deleting the parent of the trash can of class "delete"
        e.target.parentElement.remove();
    }
});

//Searching the list

const filterTodos=(term)=>{
    //changes to array the whole list of "ul"
    //here we add a class "filter" to all the list items that dont contain the search term
    Array.from(list_ul.children)
        .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=>{
            todo.classList.add("filter");
        });
    //Doing the same thing as above but removing the class "filter" if we do have a match after deleting something in the search bar
    Array.from(list_ul.children)
        .filter((todo)=> todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=>{
            todo.classList.remove("filter");
        });
}


search.addEventListener('keyup',()=>{
    const currentValue=search.value.toLowerCase().trim();
    filterTodos(currentValue);
})