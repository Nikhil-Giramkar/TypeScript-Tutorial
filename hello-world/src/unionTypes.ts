//We can define a paramter with multiple possible data types

function kmToMiles(kilometres: number | string): number{

    if(typeof kilometres==='number')
        return kilometres * 1.6
    else{
        return parseInt(kilometres) * 1.6
    }
}

kmToMiles(10)
kmToMiles('10')