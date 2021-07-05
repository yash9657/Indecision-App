class Person {
    constructor(name,age) {
        this.name = name || 'Anonymous';
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}`;
    }
    getDescription() {
        return `Hi I am ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }
    hasmajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasmajor()) {
            description = description + ` I am majoring in ${this.major}`;
        }
        return description;
    }

}

class Traveller extends Person {
    constructor(name,age,homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greetings = super.getGreeting();
        if(this.hasHomeLocation()){
            greetings = greetings + ` I am visiting from ${this.homeLocation}`;
        }
        return greetings;
    }
}

const me = new Student('Yash',19, 'Computer Science');
const he = new Traveller('andrew',29,'Texas');
console.log(he.getGreeting());
console.log(he.getDescription());