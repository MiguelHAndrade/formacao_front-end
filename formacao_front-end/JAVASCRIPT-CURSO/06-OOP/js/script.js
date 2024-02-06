// 1 - Métodos
const animal = {
    nome: "Bob",
    som: function(){
        console.log('Ão Ão')
    }
}

console.log(animal.nome)

animal.som()


console.log('\n////////// ////////// //////////\n')


// 2 - aprofundando metodos
const pessoa = {
    nome: 'Miguel',

    getNome: function(){
        return this.nome
    },

    setNome: function(novoNome){
        this.nome = novoNome
    }
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome('André')

console.log(pessoa.getNome())


console.log('\n////////// ////////// //////////\n')


// 3 - prototype
const text = 'asd'

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []

console.log(arr.length)
console.log(Object.getPrototypeOf(arr))


console.log('\n////////// ////////// //////////\n')


// 4 - mais sobre prototype
const myObject = {
    a: 'b'
}

console.log(Object.getPrototypeOf(myObject))
console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)
console.log(mySecondObject.a)
console.log(Object.getPrototypeOf(mySecondObject) === myObject)


console.log('\n////////// ////////// //////////\n')


// 5  - classes básicas
const dog = {
    race: null,
    patas: 4,
}

const pastorAlemao = Object.create(dog)

pastorAlemao.race = 'Pastor Alemão'

console.log(pastorAlemao)
console.log(pastorAlemao.patas)

const bulldog = Object.create(dog)

bulldog.race = 'Bulldog'

console.log(bulldog)


console.log('\n////////// ////////// //////////\n')


// 6 - função como classe = função construtora
function criarCao(nome, raca){
    const cao = Object.create({})

    cao.nome = nome
    cao.raca = raca

    return cao
}

const boby = criarCao('Boby', 'Rafeiro')

console.log(boby)

const jack = criarCao('Jack', 'Poodle')

console.log(jack)
console.log(Object.getPrototypeOf(jack))


console.log('\n////////// ////////// //////////\n')


// 7 - funções como classes
function Cao(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cao('Ozzy', 'Husky')

console.log(husky)


console.log('\n////////// ////////// //////////\n')


// 8 - metodos na função construtora
Cao.prototype.uivar = function(){
    console.log('Auuuuuu!')
}

console.log(Cao.prototype)
husky.uivar()


console.log('\n////////// ////////// //////////\n')


// 9 - classes es6
class CaoClass{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CaoClass('Jeff', 'Lavrador')

console.log(jeff)
console.log(Object.getPrototypeOf(jeff))