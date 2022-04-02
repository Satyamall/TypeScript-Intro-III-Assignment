interface TodoItem {
    id: number;
    title: string;
    status: boolean;
}
declare function getName(firstname: string, lastname?: string): string;
declare let ret: string;
declare let ret1: string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number | string;
    country: string;
}
interface PersonDetails {
    Prefix?: string;
    phones: number[];
    addresses: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare let PhoneBook: PersonDetails[];
declare const person: PersonDetails;
