let btn = document.querySelector("#button");
const textarea = document.querySelector("#textarea")

let user_name =  prompt("What's your name?");

btn.addEventListener("click", callback)



function callback(){
    console.log("Clicked")
    alert("Hello,"+ name);
}