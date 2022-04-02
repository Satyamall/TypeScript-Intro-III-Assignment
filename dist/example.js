// *1
// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number
// *2
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
function getName(firstname, lastname) {
    if (!lastname) {
        return firstname;
    }
    return firstname + " " + lastname;
}
var ret = getName("Satya", "Mall");
var ret1 = getName("Satya");
console.log(ret, ret1);
// *5
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
var PhoneBook = [];
var person = {
    Prefix: "Shri",
    phones: [1, 2],
    addresses: ["Parsauna", "Buzurg"],
    email: "abc@gmail.com",
    firstname: "Satya",
    lastname: "Mall",
    middlename: "Prakash"
};
PhoneBook.push(person);
console.log(PhoneBook);
