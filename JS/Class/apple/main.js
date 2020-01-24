window.onload = function () {
    let appleFruit = new TreeModel();
    // document.body.innerText += "jhk"+apple.diameter;

    while(!appleFruit.isMature()) {
        appleFruit.passGrowingSeason();
      }
      
      
      // # Report yearly harvest information for the lifetime of the tree.
      while(!appleFruit.isDead()){
        appleFruit.passGrowingSeason();
        let harvestedFruit = [];
        let averageDiameter = 0;
      
        while(appleFruit.hasFruits()) {
          harvestedFruit.push(appleFruit.pickFriut())
        }
        for (let i = 0; i < harvestedFruit.length; i++) {
            averageDiameter += harvestedFruit[1].diameter;

        }  

        averageDiameter = +(harvestedFruit.length).toFixed(2);

        let reportBlock = document.createElement("div");
        reportBlock.className = "report";
        reportBlock.innerHTML = "<h2>Производство дерева возрастом " + appleFruit.age + " лет</h2> <ul><li>Высота: " + appleFruit.height +"</li><li>Количество плодов: " + harvestedFruit.length +"</li><li>Средний размер плода: "+averageDiameter+"</li></ul>";
        document.body.appendChild(reportBlock);

        // console.log(averageDiameter);
    }


};