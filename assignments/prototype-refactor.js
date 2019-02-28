/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(gameAttrs) {
    this.createdAt = gameAttrs.createdAt;
    this.name = gameAttrs.name;
    this.dimensions = gameAttrs.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(charStatAttrs) {
    super(charStatAttrs);
    this.healthPoints = charStatAttrs.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humaAttrs) {
    super(humaAttrs);
    this.team = humaAttrs.team;
    this.weapons = humaAttrs.weapons;
    this.language = humaAttrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Villain extends Humanoid {
  constructor(villAttrs) {
    super(villAttrs);
  }
  removeHealthPoints(target) {
    --target.healthPoints;
    if (target.healthPoints > 0) {
      return console.log(
        `${target.name} your health points just dropped to ${
          target.healthPoints
        }!`
      );
    }
    return console.log(
      `${target.name} is dead his health points dropped to ${
        target.healthPoints
      }!`
    );
  }
}

class Hero extends Villain {
  constructor(heroAttrs) {
    super(heroAttrs);
  }
}

const villain1 = new Villain({
  name: 'superVillain',
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 8,
  team: 'Villains'
});

const hero1 = new Hero({
  name: 'myHero',
  dimensions: {
    length: 2,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  team: 'Avengers'
});

villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
villain1.removeHealthPoints(hero1);
hero1.removeHealthPoints(villain1);
