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
    nickname: string = '';

    constructor(name: string, weight: number, age: number, nickname?: string) {
        super(name, weight);
        this.age = age;
        if (nickname && nickname != '') {
            this.nickname = nickname;
        }
    }

    animalInfo() {
        this.animalInfoMain();
        console.log(`${this.age} year/s old`);
        if (this.nickname != '') {
            console.log(`${this.nickname} is her/his nickname`);
        }
    }
}

const turtleMini = new Turtle("Mica", 1, 1);
const turtleCica = new Turtle("Cica", 2, 2, "Cici");
turtleMini.animalInfo();
turtleCica.animalInfo();

const turtleNica = new Turtle("Cica", 2, 2, "Nici");
turtleNica.animalInfo();
