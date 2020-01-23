let a = document.getElementsByTagName("section");
console.log(a.length);

function getRandom(n) {
    return Math.floor(Math.random() * n);
}


function getRGB() {
    return `rgb(${getRandom(256)},${getRandom(256)},${getRandom(256)})`;
}

for(let i = 0; i < a.length; i++) {
    let section = a[i];
    section.id = i;
    section.style.backgroundColor = getRGB(); 
}

document.getElementById("logo").style.background = getRGB();
document.getElementById("logo").style.boxShadow = "20px 15px " + getRGB();

let head = document.getElementsByTagName("header")[0];
head.style.background = getRGB();

document.getElementsByClassName("menu")[0].style.backgroundColor = getRGB();

let li = document.getElementsByTagName("li");
for(let i = 0; i < li.length; i++) {
    let l = li[i];
    l.id = i;
    l.style.backgroundColor = getRGB(); 
    l.style.lineHeight = "50px";
}

let h = document.getElementsByTagName("h2");
for(let i = 0; i < h.length; i++) {
    let hOne = h[i];
    hOne.id = i;
    hOne.style.color = getRGB(); 
}

setTimeout("window.location.reload()",1);

// стили для li и h1
