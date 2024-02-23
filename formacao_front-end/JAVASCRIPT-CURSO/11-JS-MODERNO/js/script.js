// 1 - var, let e const
var x = 10
var y = 15

if(y > 10){
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

function logName(){
    const name = 'Pedro'
    console.log(name)
}

const name = 'Miguel'

console.log(name)
logName()



// 2 - Arrow Functions
const sum = function(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b


console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name){
        return `Hello ${name}!`
    } else{
        return `Hello`
    }
}

console.log(greeting())
console.log(greeting('Miguel'))

 const user = {
    name: 'Mike',
    sayUserName(){
        setTimeout(function (){
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this)
            console.log(`Username ${this.name}`)
        }, 2000)
    }
 }

 user.sayUserName()
 user.sayUserNameArrow()


//  3 - Filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: 'Miguel', available: true},
    {name: 'João', available: false},
    {name: 'Maria', available: false},
    {name: 'Micaela', available: true},
    {name: 'Jorge', available: false},
    {name: 'André', available: true},
    {name: 'Rafael', available: true},
    {name: 'Rita', available: false}
]

const availableUsers = users.filter((us) => us.available)

console.log(availableUsers)


// 4 - map 
const products = [
    {name: 'T-shirt', price: 10, category: 'Roupas'},
    {name: 'Televisão', price: 300, category: 'Tecnologia'},
    {name: 'Gorro', price: 8, category: 'Roupas'},
    {name: 'Smart Box', price: 50, category: 'Tecnologia'},
    {name: 'Smart Whatch', price: 100, category: 'Tecnologia'},
    {name: 'Barrinhas', price: 2, category: 'Comida'},
    {name: 'Batidos', price: 6, category: 'Comida'},
    {name: 'Gelados', price: 4, category: 'Comida'},
]

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products)


// 5 - Template literals
const userName = 'Miguel'
const age = 27

console.log(`O nome de usoário é: ${userName} e tem ${age} anos.`)