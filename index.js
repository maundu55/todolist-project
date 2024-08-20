const textInput = document.getElementById("text-input");
const addBtn = document.getElementById("add-btn");
const listEl = document.getElementById("list")

addBtn.addEventListener(('click', addTask));

function addTask(){
    if(textInput.value.trim()!==""){
    console.log(textInput.value);
    textInput.value = "";
    listEl.innerHTML = textInput.value;
    console.log(listEl);
    
    }
//     if(event.key==="Enter"){
//         console.log(textInput.value);
//     textInput.value = "";
// }
}
items.map((item)=>{
    let itemEl = "";
    return  `
            <ol class="items" id="items">
                <span><li class="list-item" id="list-item">Eat Dinner</li><button class="delete-btn">Delete</button></span>
                <span><li class="list-item">Code Daily</li><button class="delete-btn">Delete</button></span>
                <span><li class="list-item">Take Shower</li><button class="delete-btn">Delete</button></span>
            </ol>
    `
    console.log(listEl.innerHTML = itemEl);
});
