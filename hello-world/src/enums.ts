const enum Size{
    Small=7,
    Medium,
    Large
}

let mySize: Size = Size.Medium

console.log(mySize)
//When we add "const" before, enum decalaration, compiler generates more optimised js code