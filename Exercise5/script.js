let btn = document.getElementById("btn");
let div = document.querySelector("div");

btn.addEventListener("click", clickEvent)
btn.addEventListener("mouseover", mouseoverEvent);
btn.addEventListener("mouseout", mouseoutEvent);

function clickEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "Bienvenue à Abidjan !";
    text.style.color = "#" + randomColor;
    div.appendChild(text);
}

function mouseoutEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFF)).toString(16);
    div.style.background ="#" + randomColor
}

function mouseoverEvent(){
    div.style.background = "url(https://th.bing.com/th/id/R.55bfff87a7b09ced7104beb77ca07e09?rik=imbjfCcgVDsfwA&pid=ImgRaw&r=0";
}