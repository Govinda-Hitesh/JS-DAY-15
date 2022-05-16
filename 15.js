///calcAge

const studentprototype = {
    calcAge(){
        console.log(2022 - this.byear);
    },
    initialise(fname, lname, byear){
        this.fname = fname;
        this.lname = lname;
        this.byear = byear;
    }
}

const ramesh = object.create(studentprototype);
console.log(ramesh);

ramesh.fname = 'ramesh';
ramesh.lname = 'thakur';
ramesh.byear = 1990;
ramesh.calcAge();

console.log(ramesh);

const hitesh = object.create(studentprototype);
hitesh.initialise('hitesh','hit',1998);
hitesh.calcAge();
console.log(hitesh);

///classes

//classes in js and javascript doesnot work exactly the same any as that of class in java/c++
//they are just a syntactic sugar to object prototype, instances that we have read.
//they are special kind of function 

// classes are also first class function 
// clases are not hoisted.

const classprototype = class{
    constructor(fname, lname, byear){
        this.fname = fname;
        this.lname = lname;
        this.byear = byear;
    }
    calcAge(){
        console.log(2022 - this.byear);
    }
    

}

// const hitesh = object.create(classprototype);

const hitt = new classprototype('hitt','valley',1996);
console.log(hitt);
hitt.calcAge();

//addtional information 

classprototype.prototype.greet = function(){
    console.log('hi i am hit');
}

hitt.greet();
console.log(hitt.__proto__);

//typecasting
console.log("22" + 22);
console.log("Hi" + 22);

console.log(2022 - "1980");
console.log(2022 / "2");
console.log(2022 * "2");
console.log(2022 % "2");

console.log(2 ^ "2");//power is nottypecasting a string to a number like that of a subtraction, division, multiplication, modulus



