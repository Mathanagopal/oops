//3. Write a “person” class to hold all the details.
class person{
    constructor(name,label,age,gender){
        this.name=name;
        this.label=label;
        this.age=age;
        this.gender=gender;
    }
    details(){
        console.log(`
        Name   : ${this.name}
        Label  : ${this.label}
        Age    : ${this.age}
        Gender : ${this.gender}
        `)
    }
}
const own=new person("Mathan","IT Manager",38,"male");
console.log(own);
own.details();