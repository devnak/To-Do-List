let listbuttonnum = 1;
let dotable = document.getElementById("do table");
let donetable = document.getElementById("done table");

function pushlist(){

    let temp1 = document.createElement("tr");
    let value1 = document.createElement("th");
    let listname = document.getElementById("doname").value;
    value1.appendChild(document.createTextNode(listname));
    temp1.appendChild(value1);
    dotable.appendChild(temp1); //이름 추가

    let value2 = document.createElement("th");
    let listtime = document.getElementById("dotime").value.replace("T", " ") + ":00";
    value2.appendChild(document.createTextNode(listtime));
    temp1.appendChild(value2);
    dotable.appendChild(temp1);

    let value3 = document.createElement("th");
    value3.appendChild(document.createTextNode("test"));
    temp1.appendChild(value3);
    dotable.appendChild(temp1);

    let value4 = document.createElement("th");
    let listbutton1 = document.createElement("button");
    let listbutton2 = document.createElement("button");
    listbutton1.className = "listpop";
    listbutton2.className = "listdelete";
    let st1 = "완료";
    let st2 = "삭제";
    listbutton1.appendChild(document.createTextNode(st1));
    listbutton2.appendChild(document.createTextNode(st2));
    value4.appendChild(listbutton1);
    value4.appendChild(listbutton2);
    temp1.appendChild(value4);
    dotable.appendChild(temp1);
    
}
document.getElementsByClassName("listpop").addEventListner("click", function(){


}
)
document.getElementsByClassName("listdelete").addEventListner("click", function(){


}
)


