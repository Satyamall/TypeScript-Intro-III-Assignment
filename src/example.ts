// *1
// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface TodoItem {
    id: number;
    title: string;
    status: boolean;
}

// *2
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it

function getName(firstname: string, lastname?: string): string {
    if (!lastname) {
        return firstname
    }
    return firstname + " " + lastname
}

let ret = getName("Satya","Mall");
let ret1 = getName("Satya");
console.log(ret,ret1);

// *3
// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface Address{
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number | string;
    country: string;
}

// *4
// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface PersonDetails{
    Prefix?: string;
    phones: number[];
    addresses: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}

// *5
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons

let PhoneBook: PersonDetails[]=[];

const person: PersonDetails={
        Prefix: "Shri",
        phones: [1,2],
        addresses: ["Parsauna","Buzurg"],
        email: "abc@gmail.com",
        firstname: "Satya",
        lastname: "Mall",
        middlename: "Prakash"
   }
PhoneBook.push(person);
console.log(PhoneBook);