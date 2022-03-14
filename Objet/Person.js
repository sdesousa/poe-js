class Person {

    name;
    email;
    age;

    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getInfo() {
        return {
            "name": this.name,
            "email": this.email,
            "age": this.age
        };
    }

    display() {
        return `${this.name} | ${this.email} | ${this.age}`;
    }


}