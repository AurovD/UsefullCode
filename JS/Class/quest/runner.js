// Write the script to generate the report on 
// tree grove production here.
window.onload = function () {
    class FruitTree {
        constructor(dead, maxHeight, height, temp, mature, min, max, minD, maxD, typeOfFruits) {
            this.age = 0;
            this.dead = dead;
            this.maxHeight = maxHeight;
            this.height = 0;
            this.temp = temp;
            this.mature = mature;
            this.min = min;
            this.max = max;
            this.fruits = 0;
            this.status = "";
            this.minD = minD;
            this.maxD = maxD;
            this.typeOfFruits = typeOfFruits;
        }

        passGrowingSeason() {
            if (this.age < this.dead) {
                this.age++;
                if (this.height < this.maxHeight) {
                    this.height += +((Math.random() * this.temp).toFixed(1));
                }

                if (this.age >= this.mature) {
                    this.fruits = Math.floor(Math.random() * (this.max - this.min) + this.min);
                } 
            }
        }
        isDead() {
            if (this.age >= this.dead) {
                this.status ="Мервое";
                this.fruits = 0;
                return true;
            } else {
                this.status ="Живое";
                return false;
            }
        }
        isMature() {
            return !!(this.age >= this.mature);
        }
        getDiameter() {
            if (this.age >= this.dead) {
                return 0;
            } else {
                return +(Math.random() * (this.maxD - this.minD) + this.minD).toFixed(1);
            }
        }
    }

    
    class OrangeTree extends FruitTree {
        constructor(dead, maxHeight, height, temp, mature, min, max, minD, maxD, typeOfFruits) {
            super(dead, maxHeight, height, temp, mature, min, max, minD, maxD, typeOfFruits);
        }
    }

    class AppleTree extends FruitTree {
        constructor(dead, maxHeight, height, temp, mature, min, max, minD, maxD, typeOfFruits) {
            super(dead, maxHeight, height, temp, mature, min, max, minD, maxD, typeOfFruits);
        }
    }
    
    let orange = new OrangeTree(100, 25, 0, 2.5, 6, 100, 300, 2, 3.2, "Апельсины");
    let apple = new AppleTree(45, 26, 0, 2, 5, 400, 600, 1, 2.5, "Яблоки");

    while (!orange.isDead()) {
        orange.passGrowingSeason();
        apple.passGrowingSeason();
        orange.isDead();
        apple.isDead();
        // orange.getDiameter();

        let reportBlock = document.createElement("div");
        reportBlock.className = "report";
        reportBlock.innerHTML = `<h2>Производство деревьев возрастом ${orange.age} лет</h2>
        <table>
            <tr>
                <th></th>
                <th>Апельсиновые деревья</th>
                <th>Яблочные деревья</th>
                <th>Грушевые деревья</th>
            </tr>
            <tr>
                <th>Высота</th>
                <td>${orange.height}</td>
                <td>${apple.height}</td>
                <td></td>
            </tr>
            <tr>
                <th>Количество урожая</th>
                <td>${orange.fruits}</td>
                <td>${apple.fruits}</td>
                <td></td>
            </tr>
            <tr>
                <th>Статус</th>
                <td>${orange.status}</td>
                <td>${apple.status}</td>
                <td></td>
            </tr>
            <tr>
                <th>Диаметр плодов</th>
                <td>${orange.getDiameter()}</td>
                <td>${apple.getDiameter()}</td>
                <td></td>
            </tr>
            <tr>
                <th>Тип фруктов</th>
                <td>${orange.typeOfFruits}</td>
                <td>${apple.typeOfFruits}</td>
                <td></td>
            </tr>
        </table>`;
        document.body.appendChild(reportBlock);
    }
};
// console.log(orange.age);

