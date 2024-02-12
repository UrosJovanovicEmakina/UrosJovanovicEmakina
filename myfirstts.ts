class Animal {
    name: string;
    weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    animalInfoMain() {
        console.log(`Animal: ${this.name} weights ${this.weight} kg and is `);
    }
}

class Turtle extends Animal {
    age: number;
    constructor(name: string, weight: number, age: number) {
        super(name, weight);
        this.age = age;
    }

    animalInfo() {
        this.animalInfoMain();
        console.log(`${this.age} year/s old`);
    }
}

const turtleMini = new Turtle("Mica", 1, 1);
turtleMini.animalInfo();
