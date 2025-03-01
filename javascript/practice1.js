//first way to create the object
const person = {
    name:"john",
    age:30,
    city:"New York"
}
console.log(person)


//using the new keyword and object constructor
const per = new Object()
per.name = "John"
per.age = 30
per.city = "New York"

console.log(per)

//constrcutor function
function Person(name,age ,city){
    this.name= name;
    this.age = age;
    this.city = city
}

const p = new Person("John",30 ,"New York")
console.log(p)



function createPerson(name , age , city){
    return {
        name:name,
        age:age,
        city:city
    };
}

const pers = createPerson("John",30 ,"New York")

class Person{
    constructor(name,age,city){
        this.name=name
        this.age=age
        this.city =city
    }
}








