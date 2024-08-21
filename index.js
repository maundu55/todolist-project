const textInput = document.getElementById("text-input");
const addBtn = document.getElementById("add-btn");
const listEl = document.getElementById("list")

function addTask(){
    const task =textInput.value.trim();
    if(task){
    console.log(textInput.value);
    textInput.value = "";
    }
    
}
addBtn.addEventListener('click', addTask);

function displayTasks(){
    
}