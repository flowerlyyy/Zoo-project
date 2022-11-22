interface AnimalType{
    nameOfAnimal: string;
    biome :string;
    reservoir:boolean;
    area:number;
    food:string;
    predatorOr: boolean;
}

interface Animal extends AnimalType {
name: string;
age: number;
amountOfFood: number;
}

interface  Settlement{
    animals:Animal[];
    biome:string;
    reservoir:boolean;
    capacity:number;
    predator:boolean;
}

let lion:Animal={
    nameOfAnimal: 'lion',
    biome :'forest',
    reservoir:false,
    area:100,
    food:'meat',
    predatorOr: true,
    name: 'Vusala',
    age: 3,
   amountOfFood: 8

}
let monkey:Animal={
    nameOfAnimal: 'monkey',
    biome :'forest',
    reservoir:false,
    area:70,
    food:'banana',
    predatorOr: false,
    name: 'Oreo',
    age: 4,
   amountOfFood: 5

}

let elephant :Animal={
    nameOfAnimal: 'elephant',
    biome :'forest',
    reservoir:true,
    area:120,
    food:'grass',
    predatorOr: false,
    name: 'NigarA',
    age: 6,
   amountOfFood: 6

}

let dog:Animal={
    nameOfAnimal: 'dog',
    biome :'home',
    reservoir:true,
    area:40,
    food:'meat',
    predatorOr: false,
    name: 'John',
    age: 1,
   amountOfFood: 3
}

let panda:Animal={
    nameOfAnimal: 'panda',
    biome :'home',
    reservoir:true,
    area:60,
    food:'bambu',
    predatorOr: false,
    name: 'Rocky',
    age: 3,
   amountOfFood: 7
}

let flamingo:Animal={
    nameOfAnimal: 'flamingo',
    biome :'lake',
    reservoir:true,
    area:60,
    food:'bambu',
    predatorOr: false,
    name: 'Nigar',
    age: 4,
   amountOfFood: 5
}

let cageForLion :Settlement={
    animals:[],
    biome:'forest',
    reservoir:false,
    capacity:120,
    predator:true
}

function CheckCage(animal: Animal, cage: Settlement){
let count:number=0;
 if(animal.reservoir==cage.reservoir && animal.biome==cage.biome && animal.predatorOr==cage.predator){

 for(let j=0; j<cage.animals.length; j++){
    count+=1;
 }

 if(cage.capacity>count){
    cage.animals.push(animal);


 }
 else{
    console.log("there are not enough space in this cage");  
}
}
else{
console.log(`This cage is not available for  -${animal.name}-  animal`);
}
}
  function PutAnimalsInside (cage:Settlement){
    for(let i=0; i<cage.animals.length;i++){
        console.log(cage.animals[i].name);
    }
  }
  CheckCage(flamingo,cageForLion );
  CheckCage(lion,cageForLion );
  CheckCage(panda,cageForLion );
  CheckCage(monkey,cageForLion );
  CheckCage(elephant,cageForLion );
  CheckCage(dog,cageForLion );
  PutAnimalsInside(cageForLion);

