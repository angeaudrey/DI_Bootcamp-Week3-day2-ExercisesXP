let allBoldItems = [];

let boldItems = document.getElementsByTagName("strong");

function getBold_Items() {
  for (let item of boldItems) {
    allBoldItems.push(item);
  }
}

getBold_Items();

function highlight() {
  for (let item of allBoldItems) {
    item.style.color = "blue";
  }
}

function returnNormal() {
  for (let item of allBoldItems) {
    item.style.color = "black";
  }
}

let par = document.querySelector("p");

par.addEventListener("mouseover", highlight);

par.addEventListe