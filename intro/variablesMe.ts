

let greetings: string = "Hello Nikhil"
//greetings = 6 -- red line 
console.log(greetings);

/*
There is no specific type for integer/float
Everything is just "number"!
*/

var userId: number
//userId = "ds"
userId = 123.45

var isLoggedIn: boolean = true

//Any - tunrs off type checking in typescript
//let hero; - this accepts any sorts of values
let hero: string; //this shows red line on line 31

function getHero1(){
    return "thor"
}

function getHero2() {
    return true
}

hero = getHero1()
//hero = getHero2()


//Func definition with default values
function loginUser(name: string, password: string, isPremium: boolean = false){ }

loginUser("Nik", "pass")

//It is also important to add type check on return value
function addTwo(x : number) : number{
    //return "Hello"
    return x + 2
}

//in arrow
const getHello = (name: string) : string => {
    return "Hello " + name
}

const heroes = ["thor", "ironman", "hulk"]

heroes.map((hero) : string => { //defining return type in map
    //return 2
    return `Hero is ${hero}`
})

//returning an object from a func that takes an obj

function getCourse({name: string, isPaid: boolean}):{success: boolean} {
    return {
        success: true
    }
}

//Aliases are defined using type 
//We are creating a custom type
type User = {
    readonly _id: number, //_id canot be modified in future
    name: string,
    creditCardDetails? : string //marked optional with ? 
}

let myUser: User = {
    _id: 123,
    name: "myUs"
}

myUser.name = "Nik"
//myUser._id = 90 - not allowed

//Combine types using | or &

type Employee = {
    name: string,
    isContract: boolean
}

type Person = User & Employee

let myP: Person = {
    name: "Nik",
    _id: 122,
    isContract: true
}

//Arrays
let allUsers: User[]
let myAllUsers: Array<User>
let noChangeAllowedUsers: ReadonlyArray<User>

//enums

enum SeatChoice {
    AISLE,
    WINDOW,
    MIDDLE
}

let mySeat = SeatChoice.AISLE

//interfaces

interface IUser {
    name: string
    _id: number,
    getDemo(): string
}

const nikhil: IUser = {
    name: "nik",
    _id: 12,
    getDemo: () => {
        return "Ok"
    }
}