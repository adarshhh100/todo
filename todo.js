const inputBox = document.getElementById("text-box");
const lists = document.getElementById("lists");


function addTask(){
    if (inputBox.value ===''){
        alert("Empty text , Please write something");
    }
    else{
        let newlist = document.createElement("li");
        newlist.innerHTML = inputBox.value;
        lists.appendChild(newlist);
        let cross = document.createElement("span");
        cross.innerHTML = '&#8855';
        newlist.appendChild(cross);
    }
    inputBox.value = "";
    savetask();
    
}
lists.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    savetask();
    
    
}
)
function savetask(){
    localStorage.setItem("tasks",lists.innerHTML);
}
function showtask(){
    lists.innerHTML = localStorage.getItem("tasks");
}
showtask();