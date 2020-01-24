class TreeModel {
    constructor() {
        this.age = 0;
        this.height = 0;
        this.fruits = 0;
        this.
    }
    passGrowingSeason() {
        if (this.age < 50) {
            this.age++;
            if (this.height < 470) {
                this.height += Math.floor(Math.random() * 27 + 30);
            }
            if (this.age >= 5) {
                this.fruits = Math.floor(Math.random() * 150 + 100);
            }
        }
    }
    isMature() {
        return !!(this.age >= 4)
    }
    isDead() {
        if (this.age >= 50) {
            return true;
        }
    }
    hasFruits() {
        if (this.fruits > 0) {
            return true;
        }
    }
    pickFruit() {
        if (this.hasFruits()) {
            this.fruits--;
            return new AppleModel();
        }
    }
}
