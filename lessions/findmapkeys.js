/**
 * Created by chunleizhang on 30/01/2017.
 */

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);

// for (var key of m.keys()){
//     console.log(key)
// }
//
// for (var value of m.values()) {
//     console.log(value)
// }



// function Person(personname, personage){
//     this.name = personname;
//     this.age = personage;
// };

function Person() {
    this.name = arguments[0];
    this.age = arguments[1];
}

Person.prototype.sayHello = function(){
    console.log(this.name + " say hello to everyone!");
}

var cl = new Person("chunlei", 37, 128, "sfkm");
var my = new Person("mingyan", 24);

cl.sayHello()
Person.prototype.sayHello.call(cl)

my.sayHello()
Person.prototype.sayHello.call(my)



// console.log(cl.name)
// console.log(cl.age)
//
// console.log(my.name);

