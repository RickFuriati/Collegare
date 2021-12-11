const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = ()=>{
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}

//JS LOCAL STORAGE
document.getElementById("save").addEventListener("click", function(){
    var descricao = document.getElementById("descricao").value;
    localStorage.setItem("descricao", descricao);

 
    
    //5 estrelas
    if(document.getElementById("rate-5").checked == true){
        localStorage.setItem("five", true);
        localStorage.setItem("four", false);
        localStorage.setItem("three", false);
        localStorage.setItem("two", false);
        localStorage.setItem("one", false);
    }

    //4 estrelas
    if(document.getElementById("rate-4").checked == true){
        localStorage.setItem("five", false);
        localStorage.setItem("four", true);
        localStorage.setItem("three", false);
        localStorage.setItem("two", false);
        localStorage.setItem("one", false);
    }

    //3 estrelas
    if(document.getElementById("rate-3").checked == true){
        localStorage.setItem("five", false);
        localStorage.setItem("four", false);
        localStorage.setItem("three", true);
        localStorage.setItem("two", false);
        localStorage.setItem("one", false);
    }

    //2 estrelas
    if(document.getElementById("rate-2").checked == true){
        localStorage.setItem("five", false);
        localStorage.setItem("four", false);
        localStorage.setItem("three", false);
        localStorage.setItem("two", true);
        localStorage.setItem("one", false);
    }

    //1 estrela
    if(document.getElementById("rate-1").checked == true){
        localStorage.setItem("five", false);
        localStorage.setItem("four", false);
        localStorage.setItem("three", false);
        localStorage.setItem("two", false);
        localStorage.setItem("one", true);
    }
  
    alert("Salvo!");
}, false);