// let id: number = 5;
// console.log('id:',id)
//Basic Data Types
// let num: number = 20;
// let text: string = 'i am text';
// let bool: boolean = true;
// let anything: any = 21;
// let nums: number[] = [11,12,13];
// let texts: string[] = ['Text1','Text2'];
// let bools: boolean[] = [true,false,true];
// let anythings: any[] = [21,'213',true];
//tuple
// let tuple: [number,string,boolean,any] = [12,'Text',false,123]
//tuple array
// let car :[string, string, number ][];
// car = [
// ['Honda','civic',2006],
//     ['Toyota','corolla',2010],
//     ['Mercedes','benz',2018]
// ]  
// Union
// let pid: string | number = '12'; //works
// let pid: string | number = 12; //also works
//enum
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
// type User = {
//    id : number,
//    name: string
// }
// const user : User = {
//     id : 1,
//     name: 'Garfield'
// }
// console.log(user);
var cid = 1;
// const customerid = <number>cid;
var customerid = cid;
console.log(typeof (customerid));
