class Human {
    constructor(name, gender) {
        this.age = 100;
        this.name = name;
        this.gender = gender;
    }
    get getAge() {
        return this.age;
    }
}
const ho = new Human("hoho");
const person = {
    name: "hoho12",
    age: 29,
    gender: "male",
};
const sayHi = (a) => {
    return `Hello ${a.name}!! you are ${a.getAge} years old! you are ${a.gender}!`;
};
const name1 = "hoho", age = 2911, gender = "male";
ho.name = "hohoho";
console.log(ho.getAge);
console.log(sayHi(ho));
//# sourceMappingURL=index.js.map