window.onload = function() {
    //let apple = new AppleModel();
    let appleTree = new TreeModel();
    // document.body.innerText += "Diameter: "+ apple.diameter;

    while (!appleTree.isMature()) {
        appleTree.passGrowingSeason();
        console.log(appleTree);
    }

    while (!appleTree.isDead()) {
        appleTree.passGrowingSeason();
        let harvestedFruits = [];
        let averageDiameter = 0;


        while (appleTree.hasFruits()) {
            harvestedFruits.push(appleTree.pickFruit());

        }

        for (let i = 0; i < harvestedFruits.length; i++) {
          averageDiameter +=  harvestedFruits[1].diameter;



        }

        averageDiameter = +(averageDiameter / harvestedFruits.length).toFixed(2);
        let reportBlock = document.createElement("div");
        reportBlock.className = "report";
        reportBlock.innerHTML = "<h2>Производство дерева возрастом " + appleTree.age + " лет</h2> <ul><li>Высота:" + appleTree.height + "</li><li>Количество плодов: " + harvestedFruits.length + "</li> <li>Средний диаметр плода: " + averageDiameter + " </li></ul>";

        document.body.appendChild(reportBlock);
        // console.log(averageDiameter);

    }

        // document.body.innerText +=
};
