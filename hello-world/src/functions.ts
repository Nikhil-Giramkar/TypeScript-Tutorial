/**
 * Its a best practice to always annotate your functions with a type
 * So if you forget to return any value or return value of some other data type, red line appear
 * necessary while building large projects.
 * 
 * in tsconfig.json we can set noUnusedParameters : true
 * This ensures that there is no un unsed values in code
 * 
 * in tsconfig.json we can set noUnusedLocals : true
 * This ensures that there is no un unsed values insde function
 */

function calculateTax(income: number = 100): number{
   // let x;

    if(income > 50_000)
        return income*0.3
    //if this if statement is not true, JS will return undefined
    //hence mention a return statement for a condition where if block is not executed

    return 0;
}

//calculateTax(500, 2022)
//Giving extra arguments in JS is alright, but TS restrics tgis to have exact number of arguments as in signature
let tax = calculateTax(1_00_000)
console.log(tax)

//We can also opt to not pass any argument by giving default values to parameters while decalring.
tax = calculateTax()
console.log(tax)