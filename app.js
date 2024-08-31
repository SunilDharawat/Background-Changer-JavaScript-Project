const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click",
        function(e){
            if(e.target.id === "purple"){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === "yellow"){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === "green"){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === "white"){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === "lavender"){
                body.style.backgroundColor = e.target.id;
            }
        }
    )

})