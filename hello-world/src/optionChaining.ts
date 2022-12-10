type Employee = {
    birthday?: Date
}


//Get Employee can return an object or null
function getEmployee(id: number) : Employee | null | undefined {

    return id === 0? null : {birthday : new Date()}
}

let myMan = getEmployee(0);

// ?. is optional property access operator, if MyMan is not null and its birthday prop is set, then value else undefined
console.log(myMan?.birthday?.getFullYear())

//Optional element access
//customers?.[0]

