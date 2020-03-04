window.onload = function () {
    let square = document.querySelector(".square");
    let circle = document.querySelector(".circle");
    let buttonSq = document.querySelector(".sqBtn");
    let buttonCir = document.querySelector(".cirBtn");
    let brush = document.querySelector(".brush");   //находим нужные классы элементов

    for (let i = 0; i < brush.children.length; i++) {
        let form = brush.children[i];                      //для выбора кистей проходим по их контейнеру и сохраням дочерние элементы (их два)в переменную form 
        form.addEventListener("click", function () { //добавляем событие по клику
            form.classList.add("active");     //

            for (let j = 0; j < brush.children.length; j++) {
                if (brush.children[j].classList.contains("active") && brush.children[j] !== form) {
                    brush.children[j].classList.remove("active");
                }
            }
            if (brush.children[i] === buttonSq) {
                square.classList.add("active");
                circle.classList.remove("active");
            }
            if (brush.children[i] === buttonCir) {
                square.classList.remove("active");
                circle.classList.add("active");
            }
        })
    }

    let colors = document.querySelector(".colors");
    for (let l = 0; l < colors.children.length; l++) {
        let color = colors.children[l];
        color.addEventListener("click", function () {
            let board = document.querySelector(".board");
            color.classList.add("active");

            for (let j = 0; j < colors.children.length; j++) {
                if (colors.children[j].classList.contains("active") && colors.children[j] !== color) {
                    colors.children[j].classList.remove("active");                                                                        
                }
            }
            function draw(e) {
                let pointA = document.createElement("div");

                let colors = document.querySelector(".colors");
                pointA.className = color.className;

                pointA.style.left = e.clientX + "px";
                pointA.style.top = e.clientY + "px";

                let sqWidth = document.getElementById("sqWidth");
                pointA.style.width = sqWidth.value;
                console.log(sqWidth.value);
                let sqHeight = document.getElementById("sqHeight");
                pointA.style.height = sqHeight.value;



                if (circle.classList.contains("active")) {
                    pointA.style.borderRadius = "50%";
                    let cirRad = document.getElementById("cirRad");
                    pointA.style.width = cirRad.value;
                    pointA.style.height = cirRad.value;
                }
                
                pointA.style.position = "absolute";
                board.appendChild(pointA);
            }


            document.body.addEventListener("mousedown", function (event) {
                if (event.target !== document.querySelector(".panel") || event.target === board) {
                    board.addEventListener("mousemove", draw);
                }
                document.body.addEventListener("mouseup", function () {
                    board.removeEventListener("mousemove", draw);
                })
            });
        });
    }


}