let number = 0;
let nume = 1;
let dotable = document.getElementById("do table");
let donetable = document.getElementById("done table");
let vava;
let listtime;


function pushlist(){

    listtime = document.getElementById("dotime").value.replace("T", " ") + ":00";
    if((new Date() - new Date(listtime)) > 0)
    {
        return alert("과거는 선택이 안됩니다.");
    }
    let temp1 = document.createElement("tr");
    let value1 = document.createElement("td");
    let listname = document.getElementById("doname").value;
    value1.appendChild(document.createTextNode(listname));
    temp1.appendChild(value1);
    dotable.appendChild(temp1); //이름 추가

    let value2 = document.createElement("td");
    
    value2.appendChild(document.createTextNode(listtime));
    temp1.appendChild(value2);
    dotable.appendChild(temp1);

    let value3 = document.createElement("td");
    temp1.appendChild(value3);
    dotable.appendChild(temp1);
    let end = new Date(listtime);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    timer = setInterval(showRemaining, 1000);
    function showRemaining() {
        var now = new Date();
        var distance = end - now;

        var distance = end - now;
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        vava = document.createTextNode(days + '일 '+ hours + '시간 '+minutes + '분 '+seconds + '초');
        value3.innerHTML = vava.textContent;
    
    }

    let value4 = document.createElement("td");
    let listbutton1 = document.createElement("button");
    let listbutton2 = document.createElement("button");
    listbutton1.className = "listpop"+number;
    listbutton2.className = "listdelete"+number;
    listbutton1.setAttribute("onclick", "popbutton("+number+")");
    listbutton2.setAttribute("onclick", "deletebutton("+number+")");
    let st1 = "완료";
    let st2 = "삭제";
    listbutton1.appendChild(document.createTextNode(st1));
    listbutton2.appendChild(document.createTextNode(st2));
    value4.appendChild(listbutton1);
    value4.appendChild(listbutton2);
    temp1.appendChild(value4);
    dotable.appendChild(temp1);
    
    number += 1;
}

function popbutton(num){
    alert("완료처리");
    let selectvalue = document.getElementsByClassName("listpop"+num).item(0).parentNode.parentNode;
    let aaa = selectvalue.childNodes[0];
    let bbb = selectvalue.childNodes[1];
    let ccc = document.createElement("tr");
    ccc.appendChild(aaa);
    ccc.appendChild(bbb);
    donetable.appendChild(ccc);
    dotable.removeChild(selectvalue);
    

}

function deletebutton(num){
    alert("삭제처리");
    let selectvalue = document.getElementsByClassName("listdelete"+num).item(0).parentNode.parentNode;
    dotable.removeChild(selectvalue);
    //dotable.removeChild(dotable.childNodes[5 + num]);
}



