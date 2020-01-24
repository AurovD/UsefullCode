class Rectagle {
    constructor (width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }

    show() {
        return "Дан прямоугольник с шириной " + this.width + "сантиметров и высотой " + this.width; 
    }
}

class Square extends Rectagle {
    constructor (width = 0, height = 0) {
        super(width, height);
    }

    show() {
        return "Дан квадрат с шириной " + this.width + "сантиметров и высотой " + this.width; 
    }
}

let a = new Rectagle(6, 8);
console.log(a.show());


let b = new Square(5, 7);
console.log(b.show());

