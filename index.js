let data = document.getElementById("mainFile")
console.log("script loaded");

let btn = document.getElementById("upload");
btn.addEventListener("click", function(e) {
    e.preventDefault();

    if(data.value == 0){
        alert("please upload a file");
        console.log("upload a file");
    }
    else{
        alert("added successfully!")
        console.log("file added with button ");
    }
})


function myfun(e){
}

myfun();