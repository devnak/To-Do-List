let head = document.querySelector("h1");
let loginbutton = document.querySelector("button"); 

loginbutton.onclick = function(){
    alert("Login");
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    head.textContent = "To Do List For " + storedName;
}

function setUserName(){
    let MyName = prompt("이름을 입력해주세요");
    if(!MyName || MyName === null){
        setUserName();
    }
    localStorage.setItem("name", MyName);
    head.textContent = "To Do List For " + MyName;
}



