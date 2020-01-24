class Point {
    constructor(x = 0, y = 0) {  //function тут свойства синтаксический сахар
        this.x = x;
        this.y = y;
    }

    moveTo(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    showReport() {
        return "2D точка с координатами x: " + this.x + ", y: " + this.y + ".";
    }
}

let a = new Point(4, 5);
console.log(a.showReport());

class Point3D extends Point {
    constructor(x, y, z) {
        super(x ,y);
        this.z = z;
    }

    moveTo(newX, newY, newZ) {
        super.moveTo(newX, newY);
        this.z = newZ;
    }
    showReport() {
        return "2D точка с координатами x: " + this.x + ", y: " + this.y + ", z: " +this.z + ".";
    }

}

let b =  new  Point3D(2, 4, 7);
console.log(b.showReport());