const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

//  adding todos to the list 
const generateTemplete=todo=>{
   const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
   <span>${todo}</span>
   <i class="far fa-trash-alt delete"></i>
 </li>`;
 list.innerHTML+=html;
}
addForm.addEventListener('submit',e=>{
   e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length){
    generateTemplete(todo);
    addForm.reset();
   }
});

// deleting the todos from the list 
   list.addEventListener('click',e=>{
      if(e.target.classList.contains('delete')){
         e.target.parentElement.remove();
      };
   });

//  serching and filtering the todos
//function to filter todos
const filter=(term)=>{
   Array.from(list.children)
   .filter((todo)=>{
      return !todo.textContent.toLowerCase().includes(term);
        
   }).forEach(todo=>{
      todo.classList.add('filtered')

   });
   Array.from(list.children)
   .filter((todo)=>{
      return todo.textContent.toLowerCase().includes(term);
        
   }).forEach(todo=>{
      todo.classList.remove('filtered')

   });
};

//keyup events
search.addEventListener('keyup',e=>{
   const term=search.value.trim().toLowerCase();
   filter(term);
   
})


