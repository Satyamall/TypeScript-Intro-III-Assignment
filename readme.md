
Problem
- 1. 
     - create an interface for an object
     - it should accept a title string
     - it should accept a status boolean
     - it should accept an id number
- 2. 
     - create a function getName
     - it should accept an object firstname and lastname
     - it should return fullname
     - keep lastname optional.
     - if lastname does not exist then return only firstname
     - make a interface for it
- 3.
     - create an interface Address
     - it takes
     - houseNumber
     - street
     - city
     - state
     - postalCode
     - country
     - add appropriate types
- 4. 
     - create a PersonDetails interface
     - it should have
     - Prefix optional
     - phones array of numbers
     - addresses array of Addresses
     - email optional
     - firstname
     - lastname
     - middlename optional
- 5. 
     - create a function PhoneBook
     - it should accept PersonDetails type argument
     - it should push into an array containing all persons

commands:
```js
cd src/

ts-node Example.ts

tsc

// export in ES2017
tsc Example.ts --target ES2017
```