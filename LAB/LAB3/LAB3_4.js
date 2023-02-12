const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

for (let i = 0; i < dogs.length; i++) {
    dogs[i].recommended = Math.ceil(dogs[i].weight ** 0.75 * 28);
}

let sarahsDog;
for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].owners.includes('Sarah')) {
        sarahsDog = dogs[i];
        break;
    }
}

if (sarahsDog.curFood > sarahsDog.recommended) {
    console.log(`Sarah's dog ate too much`);
} else if (sarahsDog.curFood < sarahsDog.recommended) {
    console.log(`Sarah's dog ate too little`);
} else {
    console.log(`Sarah's dog ate just the right amount`);
}

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].curFood > dogs[i].recommended) {
        ownersEatTooMuch.push(...dogs[i].owners);
    } else if (dogs[i].curFood < dogs[i].recommended) {
        ownersEatTooLittle.push(...dogs[i].owners);
    }
}

if (ownersEatTooMuch.length) {
    console.log(`${[...new Set(ownersEatTooMuch)].join(" and ")}'s dogs eat too much!`);
}
if (ownersEatTooLittle.length) {
    console.log(`${[...new Set(ownersEatTooLittle)].join(" and ")}'s dogs eat too little!`);
}

let reasonableDiet = false;
for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].curFood >= (dogs[i].recommended * 0.90) && dogs[i].curFood <= (dogs[i].recommended * 1.10)) {
        reasonableDiet = true;
        break;
    }
}

console.log(`Dogs have a reasonable diet: ${reasonableDiet}`);

