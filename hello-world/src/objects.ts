
let employee:{
    readonly id : number,
    name: string,
    address? : string
} = {id: 1, name:'Nikhil'}

//We can define the structure of an object as above
//We can opt to have optional members '?' and prefer not to write them while initializing and fill it later.
employee.address = 'Somewhere'

//We can also add readonly keyword for memn=bers which should not be changed ever. Only get, no set
//employee.id = 2;

// We can define custome types using 'type' keyword

type Student = {
    readonly id:number,
    name: string,
    hasPassed?: boolean
}

let myStudent: Student = {
    id : 2,
    name : 'Nikhil',
    hasPassed : true
}
