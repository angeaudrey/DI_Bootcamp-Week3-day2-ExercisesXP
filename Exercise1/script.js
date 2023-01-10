let getArticle = document.querySelector("article")

let h1 = document.querySelector('h1');
console.log(h1.innerHTML);

let supprime  = document.querySelectorAll("p");

supprime[3].remove();

let getH2 = document.querySelector("h2");
getH2.addEventListener("click",clickH2);

function clickH2(){

    getH2.style.backgroundColor = "pink";
}

let getH3 = document.querySelector("h3");
getH3.addEventListener("click",clickH3);

function clickH3(){
    getH3.style.display = "none";
}

let btn = document.createElement("button");
let textBtn = document.createTextNode("Metttre en gras");
btn.appendChild(textBtn);
getArticle.appendChild(btn);

btn.addEventListener("click",clickBtn);

function clickBtn(){
    for (let item of supprime ){
        item.style.fontWeight = "bold";
    }
}

h1.addEventListener("mouseover",overH1);

function overH1(){
    let randomFont = Math.floor(Math.random()*100)
    h1.style.fontSize = randomFont + "px";
}