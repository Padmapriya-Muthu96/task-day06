class person {
    constructor(name, age, gender, qualification, address) {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
        this.address=address;
    }
}
greet = () => {
return `details are ${name}`;
}
var myperson=new person("padma", 26, "female", "BE", "Kanchipuram")
console.log(myperson);