/* JS */





// Add Note Function

function addNote(){

var str = document.getElementById("writingArea").value;

var listDiv = document.createElement("div");
listDiv.className="noteDiv";

var content = document.createElement("p");
content.className="noteSec";
content.innerHTML=str;
content.style.width="90%";
content.style.height="30px";
content.style.margin="2px 0px 2px 0px";
content.style.border="1px solid #d3d3d3";
content.style.display="inline-block";
content.style.verticalAlign="middle";
content.style.fontFamily= "Arial, Helvetica, sans-serif";

var edit= document.createElement("button");
edit.className="editSec";
edit.innerHTML="edit";
edit.style.width="30px";
edit.style.height="30px";
edit.style.marginLeft="15px";
edit.style.background=" #6565ea";
edit.style.border="none";
edit.style.borderRadius="2px";
edit.style.color="white";

// Edit Note Function

edit.addEventListener("click", function(){
   
    document.getElementById("writingArea").value=content.innerHTML;
    remove.parentNode.parentNode.removeChild(listDiv);
});

var remove = document.createElement("button");
remove.className="deleteSec";
remove.innerHTML=" X ";
remove.style.width="30px";
remove.style.height="30px";
remove.style.marginLeft="15px";
remove.style.background=" #c75050";
remove.style.border="none";
remove.style.borderRadius="2px";
remove.style.color="white";

// Remove Note Function

remove.addEventListener("click", function(){
   
    remove.parentNode.parentNode.removeChild(listDiv);
});


listDiv.appendChild(content);
listDiv.appendChild(edit);
listDiv.appendChild(remove);
document.getElementById("section2").appendChild(listDiv);

document.getElementById("writingArea").value="";

idGenerate();

}

// Cancel Note Function

function cancelNote(){

    document.getElementById("writingArea").value="";

}


function idGenerate(){

    var list = document.getElementsByClassName("noteDiv");
    for (var i = 0; i < list.length; i++) {
        list[i].id = "noteDiv" + (i + 1);
    }
    var list = document.getElementsByClassName("noteSec");
    for (var i = 0; i < list.length; i++) {
        list[i].id = "note" + (i + 1);
    }

    var list = document.getElementsByClassName("editSec");
    for (var i = 0; i < list.length; i++) {
        list[i].id = "edit" + (i + 1);
    }

    var list = document.getElementsByClassName("deleteSec");
    for (var i = 0; i < list.length; i++) {
        list[i].id = "delete" + (i + 1);
    }
    
}