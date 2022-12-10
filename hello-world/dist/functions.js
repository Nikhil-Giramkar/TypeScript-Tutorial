"use strict";
function calculateTax(income = 100) {
    if (income > 50000)
        return income * 0.3;
    return 0;
}
let tax = calculateTax(100000);
console.log(tax);
tax = calculateTax();
console.log(tax);
//# sourceMappingURL=functions.js.map