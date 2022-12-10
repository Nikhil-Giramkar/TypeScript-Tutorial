// Arrays are declared As

let people = [1,2,3,5]

//Javascript arrays can have elements with mix datatypes 
let myPeeps = []
myPeeps[0] = 1,
myPeeps[1] = 'niks'

//Typescript allows elements with only single type
//So when we specifically mention its type, it does not allow mix type

let myProds: string[] = []
myProds[0] = 'watch',
myProds[1] = 'broom'
//myProds[3] = 6
