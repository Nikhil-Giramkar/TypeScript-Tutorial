/**
 * Data Types in JavaScript
 * string
 * number
 * boolean
 * null
 * undefined
 * object
 * 
 * Extra datatypes by TypeScript
 * any
 * never
 * enum
 * tuple
 * unknown
 */

//We can add underscores in numbers to make them more readable
let sales = 13_45_800
let course = "TypeScript"
let isPublished = true

//If we decalre variables to any string, num, bool, we donot need to specify it explcitly as age: number
//But if we donot give any values to the variable and just declare it, the dataaType will be 'any'

//let name;

//When we do not know the type of any variable, we should declare explicitly as 'any' type
//Here document can be anything .txt, .json, .mp4

function render(document: any){
    console.log(document)
}