/**
 * This file contains examples of TypeScript code demonstrating various concepts such as basic data types,
 * tuples, unions, enums, objects, type assertions, functions, interfaces, classes, generics, and TSDoc comments.
 */

// let id: number = 5;
// console.log('id:',id)

// Basic Data Types
// let num: number = 20;
// let text: string = 'i am text';
// let bool: boolean = true;
// let anything: any = 21;
// let nums: number[] = [11,12,13];
// let texts: string[] = ['Text1','Text2'];
// let bools: boolean[] = [true,false,true];
// let anythings: any[] = [21,'213',true];

// tuple
// let tuple: [number,string,boolean,any] = [12,'Text',false,123]
// tuple array
// let car :[string, string, number ][];
// car = [
//         ['Honda','civic',2006],
//         ['Toyota','corolla',2010],
//         ['Mercedes','benz',2018]
//     ]  

// Union
// let pid: string | number = '12'; //works
// let pid: string | number = 12; //also works

// enum
// enum Direction1 {
//     Up,
//     Down,
//     Right,
//     Left
// }

// console.log(Direction1.Up); //0

// enum Direction1 {
//     Up = 1,
//     Down,
//     Right,
//     Left
// }

// console.log(Direction1.Down); //2

// enum Direction1 {
//     a = 'Up',
//     b = 'Down',
//     c = 'Right',
//     d = 'Left'
// }

// console.log(Direction1.a); //0

// objects

// type User = {
//    id : number,
//    name: string
// }

// const user : User = {
//     id : 1,
//     name: 'Garfield'
// }

// console.log(user);

// type assertion
// const cid: any = 1;
// const customerid = <number>cid;
// const customerid = cid
// console.log(typeof(customerid))

// Functions

// function sum (x: number, y: number) {
//     const result : number = x+y;
//     console.log(result)
//     return result
// }
// sum(9,3);

// function sum (x: number, y: number) : void {
//     const result : number = x+y;
//     console.log(result)
// }
// sum(9,3);

// Interfaces
// interface UserInterface {
//     id : number,
//     name : String
// }
// const user1 : UserInterface = {
//     id : 1,
//     name : 'john'
// }

// interface EmployeeInterface {
//     emp_id: number,
//     emp_name: string,
//     emp_desg: string
// }
// const emp1 : EmployeeInterface = {
//     emp_id : 2,
//     emp_name : 'John',
//     emp_desg?: 'HR' // '?' makes it optional
// }

// console.log(emp1)

// interface EmployeeInterface {
//     readonly emp_id: number,
//     emp_name: string,
//     emp_desg?: string
// }
// const emp1 : EmployeeInterface = {
//     emp_id : 2,
//     emp_name : 'John',
//     emp_desg: 'HR' // '?' makes it optional
// }

// console.log(emp1.emp_id)

// interface MathFunc {(x: number,y: number ) : number};
// const add : MathFunc = (x: number, y:number) : number => x+y;
// const sub : MathFunc = (x: number, y:number) : number => x-y;


// class
// class Person {
//     name : string
//     age : number

//     constructor (name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const brad = new Person ('braddy',20);
// const mike = new Person ('Micheal',21)

// console.log(brad.name);
// console.log(mike.age);

// class Person {
//     private    name : string
//     age : number

//     constructor (name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const brad = new Person ('braddy',20);
// const mike = new Person ('Micheal',21)

// console.log(brad.name);  // error here
// console.log(mike.age);

// class Person {
//     protected    name : string //accessible only for inside this class or any sub class
//     pubic age : number //accessible inside and outside the class scope publically
//     private city: string //not accessible to anyone accept the class where defined
//     constructor (name: string, age: number, city: string) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
    
// }
// const brad = new Person ('braddy',20, 'NY');
// const mike = new Person ('Micheal',21, 'Chicago')

// console.log(brad.name); //error
// console.log(mike.age);
// console.log(brad.city); //error


// Class and Interface
// interface PersonInterface {
//     id : number,
//     name : string
//     register() : string
// }

// class Person implements PersonInterface {
//     id: number
//     name: string
//     constructor (id:number, name: string) {
//         this.id = id;
//         this.name =name;
//     }
//     register() {
//         return `${this.name} has been registerd.`
//     }
    
// }
// const Jim = new Person (123,'Jim Hopper');
// console.log(Jim.register());
// Jim Hopper has been registerd.

// class Employee extends Person {
//     position : string

//     constructor (position: string, id: number, name: string) {
//         super(id,name);
//         this.position = position;
//     }
// }
// const Vito = new Employee ('accountant',111,'Vito Carleone');
// console.log(Vito.register());
// console.log(Vito)

//generic

// function getArray<T>(items : T[]) : T[] {
//     return new Array().concat(items);
// }

// let NumArr = getArray([1,2,3]);
// NumArr.push(4);
// console.log(NumArr);

// let StrArr = getArray(['sfd','sdf'])
// console.log(StrArr)

// function pushIntoArray<ElementPusher>(Array: ElementPusher[]){
//     return Array;
// }
// let NumArr = pushIntoArray([1,2,3]);
// console.log(NumArr)

const score: Array<number> = []
const names: Array<string> = []

/**
 * A function that returns the input value as is.
 * @param val - The input value of type boolean or number.
 * @returns The input value of type boolean or number.
 */
function indentityOne(val: boolean | number) : boolean | number {
    return val;
}

/**
 * A function that returns the input value as is.
 * @param val - The input value of any type.
 * @returns The input value of any type.
 */
function indentityTwo (val: any):any {
    return val;
}
indentityTwo(4);

/**
 * A generic function that returns the input value as is.
 * @param val - The input value of type T.
 * @returns The input value of type T.
 * @template Type - The type of the input value.
 */
function indentityThree<Type>(val : Type) : Type {
    return val;
}
indentityThree(3);

/**
 * A generic function that returns the input value as is.
 * @param val - The input value of type T.
 * @returns The input value of type T.
 * @template T - The type of the input value.
 */
function indentityFour <T>(val : T) : T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

// indentityFour<Bottle>({})

/**
 * A function that returns a specific element from an array of products.
 * @param products - An array of products of type T.
 * @returns The specific element from the array of products.
 * @template T - The type of the products.
 */
function getSearchProducts<T>(products: T[]) : T {
    //we do some db operations
    const myIndex = 3;
    return products[myIndex];
}

/**
 * A generic arrow function that returns a specific element from an array of products.
 * @param products - An array of products of type T.
 * @returns The specific element from the array of products.
 * @template T - The type of the products.
 */
const getMoreSearchProducts = <T>(products: T[]): T  => {
    //do some db operations
    const myIndex = 4;
    return products[myIndex];
}

/**
 * A function that returns an object with two properties.
 * @param valOne - The first value of type T.
 * @param valTwo - The second value of type U.
 * @returns An object with properties valOne and valTwo.
 * @template T - The type of valOne.
 * @template U - The type of valTwo.
 */
// function anotherFunction <T , U extends number>(valOne: T,valTwo: U):object {
//     return {valOne, valTwo};
// }

// anotherFunction(3, '4');


interface database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction <T , U extends database>(valOne: T,valTwo: U):object {
    return {valOne, valTwo};
}

// anotherFunction (3,{});

interface quizes {
    question: string,
    answer: string
}
interface courses {
    name: string,
    duration: number
    subject: string
}

class Sellable <T> {
    public items: T[] = [];
    addItems(item: T) {
        this.items.push(item);
    }
}
