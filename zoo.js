var lion = {
    nameOfAnimal: 'lion',
    biome: 'forest',
    reservoir: false,
    area: 100,
    food: 'meat',
    predatorOr: true,
    name: 'Vusala',
    age: 3,
    amountOfFood: 8
};
var monkey = {
    nameOfAnimal: 'monkey',
    biome: 'forest',
    reservoir: false,
    area: 70,
    food: 'banana',
    predatorOr: false,
    name: 'Oreo',
    age: 4,
    amountOfFood: 5
};
var elephant = {
    nameOfAnimal: 'elephant',
    biome: 'forest',
    reservoir: true,
    area: 120,
    food: 'grass',
    predatorOr: false,
    name: 'NigarA',
    age: 6,
    amountOfFood: 6
};
var dog = {
    nameOfAnimal: 'dog',
    biome: 'home',
    reservoir: true,
    area: 40,
    food: 'meat',
    predatorOr: false,
    name: 'John',
    age: 1,
    amountOfFood: 3
};
var panda = {
    nameOfAnimal: 'panda',
    biome: 'home',
    reservoir: true,
    area: 60,
    food: 'bambu',
    predatorOr: false,
    name: 'Rocky',
    age: 3,
    amountOfFood: 7
};
var flamingo = {
    nameOfAnimal: 'flamingo',
    biome: 'lake',
    reservoir: true,
    area: 60,
    food: 'bambu',
    predatorOr: false,
    name: 'Nigar',
    age: 4,
    amountOfFood: 5
};
var cageForLion = {
    animals: [],
    biome: 'forest',
    reservoir: false,
    capacity: 120,
    predator: true
};
function CheckCage(animal, cage) {
    var count = 0;
    if (animal.reservoir == cage.reservoir && animal.biome == cage.biome && animal.predatorOr == cage.predator) {
        for (var j = 0; j < cage.animals.length; j++) {
            count += 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
        }
        else {
            console.log("there are not enough space in this cage");
        }
    }
    else {
        console.log("This cage is not available for  -".concat(animal.name, "-  animal"));
    }
}
function PutAnimalsInside(cage) {
    for (var i = 0; i < cage.animals.length; i++) {
        console.log(cage.animals[i].name);
    }
}
CheckCage(flamingo, cageForLion);
CheckCage(lion, cageForLion);
CheckCage(panda, cageForLion);
CheckCage(monkey, cageForLion);
CheckCage(elephant, cageForLion);
CheckCage(dog, cageForLion);
PutAnimalsInside(cageForLion);
