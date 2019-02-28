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
  addOrSubtract(student) {
    let randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
    randomNumber > student.grade ? --student.grade : ++student.grade;
    return console.log(student.grade);
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
      console.log(`${index}:${subject}`)
    );
  }
  PRAssignment(subject) {
    return console.log(`${this.name} has begun sprint challenge on ${subject}`);
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

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const guillaume = new Student({
  name: 'Guillaume',
  className: 'WEB18',
  favSubjects: ['HTML', 'CSS', 'Javascript'],
  grade: 80
});

const daniel = new ProjectManager({
  name: 'Daniel',
  gradClassName: 'CS1',
  favInstructor: 'Sean'
});

fred.demo('React');
fred.grade(guillaume, 'CSS flexBox');

guillaume.listsSubjects();
guillaume.PRAssignment('NodeJS');

daniel.standUp('web18_dan');
daniel.debugsCode(guillaume, 'Javascript Callbacks');

fred.addOrSubtract(guillaume);
daniel.addOrSubtract(guillaume);
fred.addOrSubtract(guillaume);
daniel.addOrSubtract(guillaume);
