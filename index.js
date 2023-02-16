let data = document.getElementById("mainFile")
console.log("script loaded");

let btn = document.getElementById("upload");
btn.addEventListener("click", function(e) {
    e.preventDefault();

    if(data.value == 0){
        alert("please upload a file");
        console.log("upload a file");
    }
    else if (f_name.value ==0) {
        alert("Please enter file name")
        
    }
    else{
        alert("added successfully!")
        console.log("file added with button ");
    }
})


function myfun(e){
}

var f_name = document.getElementById("fname")


myfun();


function addAnother(){

    let parent = document.getElementById('parent');
    let child = document.getElementById('parent').firstElementChild
    parent.appendChild(child.cloneNode(true));
}

function remove(){

    let parent = document.getElementById('parent');
    let child = document.getElementById('parent').firstElementChild
    parent.removeChild(child);


}