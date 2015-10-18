var loadBtn;
var showBtn;
var req;
var myData = [];
var count = 0;
var count2 = 1;
var list;
document.addEventListener("DOMContentLoaded", function () {
    console.log("Content Loaded");
    loadBtn = document.getElementById("loadBtn");
    showBtn = document.getElementById("showBtn");
    startLoad();
});
function startLoad() {
    loadBtn.addEventListener("click", function() {
        document.getElementById("loadBtn").className = "btn disabled";
        document.getElementById("showBtn").className = "btn enabled";
        callJason();
    });
}
function callJason() {
    req = new XMLHttpRequest();
    req.open('GET', 'users.json', true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                myData = JSON.parse(req.responseText);
                console.log(myData);
            }
        }
    };
    req.send(null);
    loadBtn.removeEventListener("click",  callJason);
    showBtn.addEventListener("click", showNxt);
}
function showNxt() {
    showBtn.innerHTML = "Show Next";
    document.getElementById("output1").innerHTML = "<img src=" + myData[count].image + ">" + "<h2 id='name'>" + myData[count].firstName + " " + myData[count].lastName + "</h2>" + "<a href=#>" + myData[count].email + "</a>";
    document.getElementById("name").style.textTransform = "capitalize";
    showBtn.removeEventListener("click", showNxt)
    showBtn.addEventListener("click", showNew);
}
function showNew() {
    if (count < 25) {
        document.getElementById("output1").innerHTML = "<img src=" + myData[count2].image + ">" + "<h2 id='name2'>" + myData[count2].firstName + " " + myData[count2].lastName + "</h2>" + "<a href=#>" + myData[count2].email + "</a>";
        document.getElementById('name2').style.textTransform = "capitalize";
        if (count2 < 24) {
            document.getElementById("output2").innerHTML += "<div><img src=" + myData[count].thumbnail + ">" + "<a href=#>" + myData[count].firstName + " " + myData[count].lastName + "</a></div>";
            count++;
            count2++;
            list = document.getElementById("output2");
            list.style.textTransform = "capitalize";
            if (count > 0) {
                list.removeChild(list.firstChild);
            } else {
                console.log("Oh boy")
            }
        } else {
            console.log("Gah");
        }
    } else {
        console.log("Boo...");
    }
}