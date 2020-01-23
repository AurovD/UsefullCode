// let A = {
//     x: 10,
//     y: 20,
//     color: "red"
// };

// let B = {
//     x: 0,
//     y: 10,
//     color: "yellow"
// };

// let C = {
//     x: 15,
//     y: 7,
//     color: "aqua"
// };

//свойства повторяются

class Point { //с большой буквы
    // constructor(xValue, yValue, colorValue) {  //function
    //     this.x = xValue || 0,
    //     this.y = yValue || 0,
    //     this.color = colorValue || "black";
    // }

    constructor(xValue = 0, yValue = 0, colorValue = "black", sizeValue = 11, formType = "50%") {  //function тут свойства синтаксический сахар
        this.x = xValue;
        this.y = yValue;
        this.color = colorValue;
        this.size = sizeValue;
        this.form = formType;
    }

    moveTo(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    reColor(newColor) {
        this.color = newColor;
    }
}

// let A = new Point(10, 20, 'red'); //экземпляр класса
// let B = new Point(0, 10, "yellow");
// let C = new Point();

// C.moveTo(15, 7);
// B.reColor("darkblue");

// console.log(A, B, C);




