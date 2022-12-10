/**
 * Its a best practice to always annotate your functions with a type
 * So if you forget to return any value or return value of some other data type, red line appear
 * necessary while building large projects.
 * 
 * in tsconfig.json we can set noUnusedParameters : true
 * This ensures that there is no un unsed values in function
 */

function calculateTax(income: number): string{
   let tax: string = income.toString();

    return tax
}

console.log(calculateTax(500))