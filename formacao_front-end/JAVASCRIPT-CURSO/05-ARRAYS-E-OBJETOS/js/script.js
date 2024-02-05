// 1 - arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)

const items = ['Miguel', true, 2, 4.14, []]

console.log(items)
console.log(items[0])


console.log('\n////////// ////////// //////////\n')


// 2 - mais sobre arrays
const arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr[2])


console.log('\n////////// ////////// //////////\n')


// 3 - propriedades
const numbers = [5, 3, 4]

console.log(numbers.length)
console.log(numbers['length'])

const myName = 'Miguel'

console.log(myName.length)

console.log(items[0].length)


console.log('\n////////// ////////// //////////\n')


// 4 - métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = 'algum texto'

console.log(text.toUpperCase())
console.log(typeof text.toUpperCase)
console.log(text.indexOf('t'))


console.log('\n////////// ////////// //////////\n')

// 5 - objetos
const person = {
    name: 'Miguel',
    age: '27',
    job: 'Web Dev',
}

console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)


console.log('\n////////// ////////// //////////\n')


// 6 - Criar e remover propriedades
const car = {
    engine: 2.0,
    brand: 'Toyota',
    model: 'Supra',
    km: 20000
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)


console.log('\n////////// ////////// //////////\n')


// 7 - mais sobre objetos
const obj = {
    a: 'Teste',
    b: false
}

console.log(obj)
console.log(obj instanceof Object)
console.log(obj instanceof Array)

const someArray = [9, 7, 5]

console.log(someArray)
console.log(someArray instanceof Object)
console.log(someArray instanceof Array)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)
console.log(obj)


console.log('\n////////// ////////// //////////\n')


// 8 - conhecer mais objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))


console.log('\n////////// ////////// //////////\n')


// 9 - mutação
const a = {
    name: 'Dude'
}

const b = a

console.log(a)
console.log(b)
console.log(a === b)

a.age = 27

console.log(a)
console.log(b)
console.log(a === b)

delete b.age

console.log(a)
console.log(b)
console.log(a === b)


console.log('\n////////// ////////// //////////\n')


// 10 - loops em arrays
const users = ['João', 'Miguel', 'Jorge', 'André', 'Rafael']

for (let i = 0; i < users.length; i++){
    console.log(`Númerar o usuário: ${users[i]}`)
}


console.log('\n////////// ////////// //////////\n')


// 11 - Push e Pop (métudos de array)
const thisArray = ['a', 'b', 'c']

console.log(thisArray)
console.log(thisArray.length)

thisArray.push('D')

console.log(thisArray)
console.log(thisArray.length)

thisArray.pop()

console.log(thisArray)
console.log(thisArray.length)

const itemRemoved = thisArray.pop()

console.log(itemRemoved)
console.log(thisArray)
console.log(thisArray.length)

thisArray.push('z', 'x', 'y')

console.log(thisArray)
console.log(thisArray.length)


console.log('\n////////// ////////// //////////\n')


// 12 - shift e unshift
const letters = ['a', 'b', 'c']

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift('p', 'o', 'i')

letters.unshift('z')

console.log(letters)


console.log('\n////////// ////////// //////////\n')


// 13 - indexOf e lastIndexOf
const myElements = ['Morango', 'Maçã', 'Abacate', 'Pêra', 'Banana', 'Abacate', 'Ameixa']

console.log(myElements.indexOf('Maçã'))
console.log(myElements.indexOf('Abacate'))
console.log(myElements.indexOf('Melão'))

console.log(myElements[3])
console.log(myElements[myElements.indexOf('Pêra')])

console.log(myElements.lastIndexOf('Abacate'))
console.log(myElements.lastIndexOf('Melancia'))


console.log('\n////////// ////////// //////////\n')


// 14 - slice 
const testSlice = ['a', 'b', 'c', 'd', 'e', 'f']

const subArray = testSlice.slice(2, 4)

console.log(testSlice)
console.log(subArray)

const subArray2 = testSlice.slice(2, 4 + 1)

console.log(testSlice)
console.log(subArray2)

const subArray3 = testSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testSlice.slice(3, 9)

console.log(subArray4)

const subArray5 = testSlice.slice(2)

console.log(subArray5)


console.log('\n////////// ////////// //////////\n')


// 15 - forEach
const nums = [1, 2, 3, 4, 5]

nums.forEach((nr) => {
    console.log(`O número é ${nr}`)
})

const posts = [
    {title: 'Primeiro post', category: 'PHP'},
    {title: 'Segundo post', category: 'JavaScript'},
    {title: 'Terceiro post', category: 'Python'},
]

posts.forEach((post) => {
    console.log(`Mostrar ${post.title} da categoria ${post.category}`)
})


console.log('\n////////// ////////// //////////\n')


// 16 - includes
const brands = ['BMW', 'Citroen', 'Toyota', 'Mercedes', 'Ferrari']

console.log(brands.includes('Fiat'))
console.log(brands.includes('mercedes'))
console.log(brands.includes('Mercedes'))

if (brands.includes('Citroen')){
    console.log('Temos carros da marca Citroen')
}

////////////////// Testing stuff..... (uncomment the 1st line!) 
/*
let brandQuest = prompt('Escreva a Marca do veículo')
let res = document.getElementById('res')

if (brands.includes(brandQuest)){
    console.log(`Temos carros da marca ${brandQuest}`)
    res.innerHTML = `Temos carros da marca ${brandQuest}!`
    res.style.color = 'Green'
} else {
    console.log(`Não temos carros da marca ${brandQuest}`)
    res.innerHTML = `Não temos carros da marca ${brandQuest}`
    res.style.color = 'Red'
}
*/
////////////////// Testing stuff..... 

console.log('\n////////// ////////// //////////\n')


// 17 - Array reverse
const reverseTest = [1, 2, 3, 4, 5]

console.log(reverseTest)

reverseTest.reverse()

console.log(reverseTest)


console.log('\n////////// ////////// //////////\n')


// 18 - trim
const trimTest = ' Teste \n '

console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length)


console.log('\n////////// ////////// //////////\n')


// 19 - padStart
const testPadStart = '1'

const newNumber = testPadStart.padStart(4, '0')

console.log(testPadStart)
console.log(newNumber)

const testPadEnd = newNumber.padEnd(10, '0')
const testPadEnd2 = newNumber.padEnd(3*5+newNumber.length, 'Olá')

console.log(newNumber)
console.log(testPadEnd)
console.log(testPadEnd2)