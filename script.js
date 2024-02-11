const cut = document.getElementsByClassName('cut');
const todoName = document.getElementsByClassName('todoName');
const addBtn = document.getElementById('addBtn');
const todoMain = document.querySelector('.todo');
let input = document.getElementById('input');


// remove List
setInterval(()=>{
    for(let i=0; i<cut.length; i++){
        cut[i].addEventListener('click',()=>{
            cut[i].parentElement.style.display = 'none';
        })
    }    
},0);


addBtn.addEventListener('click',main);
function main(){
    let inpVal = input.value;

    if(inpVal.length === 0){
       return input.placeholder = 'First Type Your List & Then Click Add Button';
    }
    
    input.placeholder = 'Type Lists';
    let createMain = document.createElement('div');
    let spanCut = document.createElement('span');
    let spanList = document.createElement('span');

    spanCut.classList.add('cut');
    spanList.classList.add('todoName');
    spanCut.innerHTML = 'x';
    spanList.innerHTML = inpVal;

    createMain.appendChild(spanCut);
    createMain.appendChild(spanList);
    
    todoMain.appendChild(createMain);
}