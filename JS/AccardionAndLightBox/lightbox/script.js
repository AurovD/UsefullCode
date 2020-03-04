// let images = document.getElementsByClassName("images")[0];
// let images = document.querySelectorAll(".images")[0];
let images = document.querySelector(".images");
let lb = document.querySelector(".lightbox");

for (let i = 0, cnt = images.children.length; i < cnt; i++) {
    let item = images.children[i];
    item.addEventListener("click", function () {
        document.body.classList.add("active");
        let img = document.createElement("img");
        // console.log(item.getAttribute("data-src"));
        img.src = item.getAttribute("data-src");
        img.className = item.className;
        lb.innerHTML = img.outerHTML;
        
        for (let k = 0; k < square.classList.length; k++) {
            if (square.classList[k] !== "square") {
                square.classList.remove(square.classList[k]);
            }
        }




        let next = document.createElement("a");
        next.className = "next";
        next.innerHTML = "&#10095;"
        lb.appendChild(next);

        let prev = document.createElement("a");
        prev.className = "prev";
        prev.innerHTML = "&#10094;"
        lb.appendChild(prev);


        next.addEventListener("click", function () {
            i++;
            let img = document.createElement("img");
            console.log("дпосле", images.children[i]);
            img.src = images.children[i].getAttribute("data-src");
            lb.innerHTML = img.outerHTML;
            let next = document.createElement("a");
            next.className = "next";
            next.innerHTML = "&#10095;"
            lb.appendChild(next);

            let prev = document.createElement("a");
            prev.className = "prev";
            prev.innerHTML = "&#10094;"
            lb.appendChild(prev);
        });
    });

}
document.body.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (document.body.classList.contains("active")) {
            document.body.classList.remove("active");
        } else {
            console.log("Обрабодчик отключен")
        }
    }
});