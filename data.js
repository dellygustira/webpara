/*Function
**/

console.log(data)
const data = 1

//cara ke 1 keyword new function
const sum1 = new Function('x', 'y', 'console.log(x+y)')

//cara ke 2 standar function
function sum2(x, y) {
    console.log(x + y)
}

//cara ke 3 arrow function
const sum3 = (x, y) => {
    console.log(x + y)
}

sum1(1, 2)
sum2(3, 2)
sum3(5, 4)