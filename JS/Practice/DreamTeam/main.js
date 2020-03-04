window.onload = function () {

    let views = document.querySelector(".view");
    let table = document.querySelector(".table");
    let cards = document.querySelector(".cards-container");
    let groups = document.querySelector(".groups-container");
    let tbody = document.querySelector(".members");


    function getStar() {
        let star = "";
        let starCount = Math.floor(Math.random() * 5 + 1);
        for (let i = 1; i <= starCount; i++) {
            star += "★";
        }
        if (starCount !== 5) {
            let rest = 5 - starCount;
            for (let i = 1; i <= rest; i++) {
                star += "☆";
            }
        }
        return star;
    }


    let teamMembers = [{
        name: "Комаров Гамлет",
        localPath: "dreamteam/komarovgamle",
        email: "komarovgamle@dreamteam.ru",
        group: "fronend",
        tel: "+7(681)1970419",
        time: "8:00-22:00",
        stars: getStar()
    },
    {
        name: "Скворцов Юстиниан",
        localPath: "dreamteam/skvorcovyustinia",
        email: "skvorcovyustinia@dreamteam.ru",
        group: "fronend",
        tel: "+7(058)9899880",
        time: "8:00-16:00",
        stars: getStar()
    },
    {
        name: "Чернов Зиновий",
        localPath: "dreamteam/chernovzinovi",
        email: "chernovzinovi@dreamteam.ru",
        group: "fronend",
        tel: "+7(355)9778822",
        time: "9:00-18:00",
        stars: getStar()
    },
    {
        name: "Яковлев Исмаил",
        localPath: "dreamteam/yakovlevismai",
        email: "yakovlevismai@dreamteam.ru",
        group: "fronend",
        tel: "+7(681)1970419",
        time: "10:00-19:00",
        stars: getStar()
    },
    {
        name: "Аксенов Джеймс",
        localPath: "dreamteam/aksenovdgeym",
        email: "aksenovdgeym@dreamteam.ru",
        group: "designer",
        tel: "+7(336)2444866",
        time: "11:00-21:00",
        stars: getStar()
    },
    {
        name: "Николаева Дина",
        localPath: "dreamteam/nikolaevadin",
        email: "nikolaevadin@dreamteam.ru",
        group: "designer",
        tel: "+7(022)9761568",
        time: "10:00-19:00",
        stars: getStar()
    },
    {
        name: "Соловьева Фредерика",
        localPath: "dreamteam/solovevafrederik",
        email: "solovevafrederik@dreamteam.ru",
        group: "designer",
        tel: "+7(668)1562266",
        time: "10:00-22:00",
        stars: getStar()
    },
    {
        name: "Леонов Альберт",
        localPath: "dreamteam/leonovalber",
        email: "leonovalber@dreamteam.ru",
        group: "designer",
        tel: "+7(849)1034087",
        time: "10:00-16:00",
        stars: getStar()
    },
    {
        name: "Зайцев Нильс",
        localPath: "dreamteam/zaycevnil",
        email: "zaycevnil@dreamteam.ru",
        group: "backend",
        tel: "+7(025)1393089",
        time: "8:00-19:00",
        stars: getStar()
    },
    {
        name: "Егоров Патрик",
        localPath: "dreamteam/egorovpatri",
        email: "egorovpatri@dreamteam.ru",
        group: "backend",
        tel: "+7(155)2888417",
        time: "11:00-21:00",
        stars: getStar()
    },
    {
        name: "Наумова Пелагея",
        localPath: "dreamteam/naumovapelage",
        email: "naumovapelage@dreamteam.ru",
        group: "backend",
        tel: "+7(983)5029047",
        time: "10:00-19:00",
        stars: getStar()
    },
    {
        name: "Жуков Расим",
        localPath: "dreamteam/gukovrasi",
        email: "gukovrasi@dreamteam.ru",
        group: "backend",
        tel: "+7(596)8709398",
        time: "8:00-20:00",
        stars: getStar()
    }];

    for (let m = 0; m < teamMembers.length; m++) {
        let tr = document.createElement("tr");
        for (let k in teamMembers[m]) {
            let td = document.createElement("td")
            td.innerText = teamMembers[m][k];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);

        let divCard = document.createElement("div");
        divCard.className = "card";
        divCard.innerHTML = `<p>${teamMembers[m].stars}</p>
                            <h1>${teamMembers[m].name}</h1>
                            <p>${teamMembers[m].group}</p>
                            <p>${teamMembers[m].tel}</p>
                            <p>${teamMembers[m].time}</p>`;
        cards.appendChild(divCard);
    }
    /*
        function getData(m) {
            
                // if (teamMembers[m].group === type) {
                    let box = document.createElement("div");
                    box.className = "box";
    
                    let boxName = document.createElement("h2");
                    boxName.innerText = teamMembers[m].name;
                    box.appendChild(boxName);
    
                    let p1 = document.createElement("p");
                    p1.innerText = teamMembers[m].stars;
                    box.appendChild(p1);
    
                    let p2 = document.createElement("p");
                    p2.innerText = teamMembers[m].time;
                    box.appendChild(p2);
    
                    return box;
                // }
            
        }
    
        for (n = 0; n < 3; n++) {
            let index = n;
            if (index === 0) {
                let collumn = document.createElement("div");
                collumn.className = "collumn";
    
                let title = document.createElement("h1");
                title.innerText = "Фронтендеры"
                collumn.appendChild(title);
    
                for (let m = 0; m < teamMembers.length; m++) {
                    if (teamMembers[m].group === "fronend") {
                        collumn.appendChild(getData( m));
                    }
                }
    
                groups.appendChild(collumn);
            }
            if (index === 1) {
                let collumn = document.createElement("div");
                collumn.className = "collumn";
    
                let title = document.createElement("h1");
                title.innerText = "Бекендеры"
                collumn.appendChild(title);
    
                for (let m = 0; m < teamMembers.length; m++) {
                    if (teamMembers[m].group === "backend") {
                        collumn.appendChild(getData(m));
                    }
                }
    
                groups.appendChild(collumn);
            }
            if (index === 2) {
                let collumn = document.createElement("div");
                collumn.className = "collumn";
    
                let title = document.createElement("h1");
                title.innerText = "Дизайнеры"
                collumn.appendChild(title);
    
                for (let m = 0; m < teamMembers.length; m++) {
                    if (teamMembers[m].group === "designer") {
                        collumn.appendChild(getData(m));
                    }
                }
    
                groups.appendChild(collumn);
            }
        }
    */
    function getData(typeRu, type) {
        let collumn = document.createElement("div");
        collumn.className = "collumn";

        let title = document.createElement("h1");
        title.innerText = typeRu;
        collumn.appendChild(title);

        for (let m = 0; m < teamMembers.length; m++) {
            if (teamMembers[m].group === type) {
                let box = document.createElement("div");
                box.className = "box";

                let boxName = document.createElement("h2");
                boxName.innerText = teamMembers[m].name;
                box.appendChild(boxName);

                let p1 = document.createElement("p");
                p1.innerText = teamMembers[m].stars;
                box.appendChild(p1);

                let p2 = document.createElement("p");
                p2.innerText = teamMembers[m].time;
                box.appendChild(p2);

                collumn.appendChild(box);
            }
        }
        return collumn;
    }

    for (n = 0; n < 3; n++) {
        let index = n;
        if (index === 0) {
            groups.appendChild(getData("Фронтендеры", "fronend"));
        }
        if (index === 1) {
            groups.appendChild(getData("Бекендеры", "designer"));
        }
        if (index === 2) {
            groups.appendChild(getData("Дизайнеры", "backend"));
        }
    }

    for (let i = 0; i < views.children.length; i++) {
        let li = views.children[i];
        li.addEventListener("click", function () {
            li.classList.add("active");
            for (let j = 0; j < views.children.length; j++) {
                if (views.children[j].classList.contains("active") && views.children[j] !== li) {
                    views.children[j].classList.remove("active");
                }

                if (li.textContent === "Таблица") {
                    cards.classList.remove("active");
                    groups.classList.remove("active");
                    if (!table.classList.contains("active")) {
                        table.classList.add("active");
                    }

                }
                if (li.textContent === "Карточки") {
                    table.classList.remove("active");
                    groups.classList.remove("active");
                    if (!cards.classList.contains("active")) {
                        cards.classList.add("active");
                    }
                }
                if (li.textContent === "Группы") {
                    cards.classList.remove("active");
                    table.classList.remove("active");
                    if (!groups.classList.contains("active")) {
                        groups.classList.add("active");
                    }

                }
            }
        })
    }

}