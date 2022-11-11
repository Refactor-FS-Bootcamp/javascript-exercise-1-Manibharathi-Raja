function select(){
    var a = document.getElementById("note").value;
    document.getElementById("p1").innerHTML=a;
    var delbtn = document.createElement("button");
    delbtn.innerHTML="DELETE";

    document.body.appendChild(delbtn);
    var editbtn=document.createElement("button");
    editbtn.innerHTML="EDIT";
    document.body.appendChild(editbtn);

    delbtn.addEventListener("click",()=>{
        document.getElementById("p1").remove()
        document.getElementById("note").value=' '
        document.getElementById('title').value=' '
    });
    editbtn.addEventListener("click",()=>{
        var a = document.getElementById("note").value;
        document.getElementById("p1").innerHTML=a;
        document.getElementById("note").value=' '
        document.getElementById("title").value=' '
    });
}
