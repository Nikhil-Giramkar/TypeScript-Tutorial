"use strict";
function kmToMiles(kilometres) {
    if (typeof kilometres === 'number')
        return kilometres * 1.6;
    else {
        return parseInt(kilometres) * 1.6;
    }
}
kmToMiles(10);
kmToMiles('10');
//# sourceMappingURL=unionTypes.js.map