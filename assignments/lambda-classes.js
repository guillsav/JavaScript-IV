// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  speak() {
    return console.log(
      `Hello my name is ${this.name}, I am from ${this.location}`
    );
  }
}

class Instructor extends Person {
  constructor(insAttrs) {
    super(insAttrs);
    this.specialty = insAttrs.specialty;
    this.favLanguage = insAttrs.favLanguage;
    this.catchPhrase = insAttrs.catchPhrase;
  }
  demo(subject) {
    return console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    return console.log(
      `${student.name} receives a perfect score on ${subject}`
    );
  }
  addOrSubtractToGrade(student) {
    let randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
    randomNumber > student.grade ? --student.grade : ++student.grade;
    return console.log(student.grade);
  }
  readyToGraduate(student) {
    student.grade / 100 > 0.7
      ? console.log(`${student.name} is ready to graduate.`)
      : console.log(
          `Did not graduate, go back to grading ${student.name}'s assignments!`
        );
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(slackChannel) {
    return console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!`
    );
  }
  debugsCode(student, subject) {
    return console.log(
      `${this.name} debugs ${student.name}'s code on ${subject}`
    );
  }
}

class Student extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
    this.grade = studAttrs.grade;
  }
  listsSubjects(favSubjects) {
    return this.favSubjects.forEach((subject, index) =>
      console.log(`${index}: ${subject}`)
    );
  }
  PRAssignment(subject) {
    return console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const dan = new ProjectManager({
  name: 'Dan',
  gradClassName: 'CS1',
  favInstructor: 'Sean'
});

const john = new Student({
  name: 'John',
  location: 'New York',
  age: 22,
  gender: 'male',
  className: 'WEB18',
  favSubjects: ['HTML', 'CSS', 'Javascript'],
  grade: 69
});

// MVP goals
console.log(`\n==== Instructor ==== `);
fred.demo('React');
fred.grade(john, 'CSS flexBox');

console.log(`\n==== Project manager ==== `);
dan.standUp('web18_dan');
dan.debugsCode(john, 'Javascript callbacks');

console.log(`\n==== Student ==== `);
john.listsSubjects();
john.PRAssignment('NodeJS');

// Stretch goals
console.log(`\n==== Add or subtract to student grade ==== `);
fred.addOrSubtractToGrade(john);
dan.addOrSubtractToGrade(john);
fred.addOrSubtractToGrade(john);
dan.addOrSubtractToGrade(john);

console.log(`\n==== Check if student ready to graduate ==== `);
fred.readyToGraduate(john);
