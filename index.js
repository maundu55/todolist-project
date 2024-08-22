const textInput = document.getElementById("text-input");
const addBtn = document.getElementById("add-btn");
const listEl = document.getElementById("list");
const listItem = document.getElementById("list-item");


function addTask(){
    const task =textInput.value.trim();
    if(task){
    console.log(textInput.value);
    textInput.value = "";
    }
const li = document.createElement('li');
   li.textContent = task;
   listEl.appendChild(li);
    console.log(task)
    const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn');
deleteBtn.type = "button";
deleteBtn.innerText = "Delete";
li.appendChild(deleteBtn);
}
addBtn.addEventListener('click', addTask);
textInput.addEventListener('keypress', (e) =>
{
if(e.key=="Enter"){
    addTask();
}
});

function deleteTasks(id){
    deleteBtn.addEventListener('click', (id)=>{
        if(li.id===id){
            listEl.removeChild(li);
            console.log('clicked')   
        }
       
    })
}

