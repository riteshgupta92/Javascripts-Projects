let inputBox = document.getElementById('todo-name')
let listBox = document.getElementById('list-box')
let button = document.getElementById('btn')


function addTodo(){
    if(inputBox.value === ''){
        alert("You must write something")
    }else{
       let li = document.createElement('li');
       li.innerHTML = inputBox.value;
       listBox.append(li);
       let span = document.createElement('span')
       span.textContent = '\u00d7'
       li.appendChild(span)
    }
    inputBox.value =''
    saveData()
}
listBox.addEventListener('click', (e)=>{
     if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listBox.innerHTML)
}
function showTask(){
    listBox.innerHTML = localStorage.getItem('data')
}
showTask()