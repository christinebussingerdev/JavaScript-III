/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. without providing prior context to "this", it will refer to the window (global scope)
* 2. using dot notation tells "this" what it should refer to
* 3. "this" in a constructor is referring to the instance where the constructor is being called.
* 4. using .call or .apply will give specific context for "this" of whatever is left of the dot.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function testGlobal() {
    console.log(this);
}
testGlobal();

// Principle 2

// code example for Implicit Binding

let implicitTester = {
    test1: "cheeseburger",
    test2: function (side) {
        console.log(`${this.test1} and ${side}`);
    }
}

implicitTester.test2('fries');

// Principle 3

// code example for New Binding
function Person(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
}

let christine = new Person({
    name: "christine",
    age: 22
});

console.log(christine)


// Principle 4

// code example for Explicit Binding
function ClubMember(member) {
    this.name = member.name;
    this.age = member.age;
    this.welcomeMsg = function() {
        console.log(`Hi ${this.name}, welcome to the club.`)
    }
}

let beth = new ClubMember({
    name: "beth",
    age: 23
})

beth.welcomeMsg();