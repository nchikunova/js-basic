// Implement own toString method for objects (without stringify)
// Input: object
// Output: string

// Example 1: 
// Input: { elem1: "test", elem2: { value: 10 } }
// Output: "{ elem1: "test", elem2: { value: 10 } }"

// Example 2: 
// Input: {}
// Output: "{}"

function main(obj) {
    if (Object.keys(obj).length === 0)
        return "{}";
    let keysAndValues = "{";
    let levels = 0;
    getProp(obj);

    function getProp(o) {
        for (const prop in o) {
            if (typeof(o[prop]) === 'object') {
                keysAndValues += `${prop}: { `;
                levels++;
                getProp(o[prop]);
            } else {
                keysAndValues += `${prop}: `;
                keysAndValues += `${o[prop]}, `;
            }
        }
    }
    keysAndValues = keysAndValues.slice(0, keysAndValues.length - 2);
    const closers = " }".repeat(levels + 1);
    return keysAndValues += closers;
}

module.exports = main;

// function main(obj) {
//     let allKeys = Object.keys(obj)
//     let allValues = Object.values(obj)
//     let resString = ""
//     if (allKeys.length < 1) {
//         return "{}"
//     }
//     for (let i = 0; i < allKeys.length; i++) {
//         if (typeof(obj[allKeys[i]]) === 'object') {

//             resString += ` ${allKeys[i]}: {`

//             let otherKeys = Object.keys(obj[allKeys[i]])
//             let othervalues = Object.values(obj[allKeys[i]])

//             for (let k = 0; k < otherKeys.length; k++) {

//                 console.log(`${otherKeys[k]} in for loop`)

//                 if (typeof(obj[allKeys[i]][otherKeys[k]]) === 'object') {

//                     resString += `${otherKeys[k]}: { `

//                     let lastObj = obj[allKeys[i]][otherKeys[k]]
//                     console.log(lastObj)
//                     let lastKeys = Object.keys(obj[allKeys[i]][otherKeys[k]])
//                     let lastValues = Object.values(obj[allKeys[i]][otherKeys[k]])
//                     console.log(lastValues[0])
//                     resString += `${lastKeys[0]}: ${lastValues[0]} }`
//                 } else {
//                     resString += ` ${otherKeys[k]}: ${othervalues[k]}, `
//                 }
//             }
//             resString += ` }`
//         } else {

//             resString += `${allKeys[i]}: ${allValues[i]}`


//             if (allKeys.length - 1 !== i)
//                 resString += ','

//         }
//     }
//     return `{ ${resString} }`
// }