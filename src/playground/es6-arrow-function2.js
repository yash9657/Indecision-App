//arguments object - no longer bound with arrow functions
/* const add = (a, b) => {
    console.log(arguments);
    return a+b;
};
console.log(add(35,1)); */


//this keyword - no longer bound
const user = {
    name: 'yash',
    cities: ['pune', 'mumbai', 'banglore'],
    printplacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printplacesLived());

const multiplier = {
    numbers: [10,11,12,13,14,15],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.multiply());