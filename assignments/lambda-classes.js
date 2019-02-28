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
    return console.log(`${this.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(studAttrs) {
    super(studAttrs);
    this.className = studAttrs.className;
    this.favSubjects = studAttrs.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects.forEach(subject => subject);
  }
  PRAssignment(subject) {
    return console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
  }
}
