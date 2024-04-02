// Prompt for Froyo Order
const userInputString = prompt(
    "Please enter the flavors of Froyo you'd like to order separated by commas.",
    " vanilla, vanilla, vanilla, strawberry, coffee, coffee"
)

const froyoArray = userInputString.split(",");
console.log(froyoArray)

const flavors = {}

for (let i = 0; i < froyoArray.length; i++) {
    const flavor = froyoArray[i];
    if (flavor in flavors) flavors[flavor] +=1
    else flavors[flavor] =1
}

console.table(flavors)