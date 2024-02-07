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


console.log('\n////////// ////////// //////////\n')


// 10 - mais sobre classes
class Camiao{
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCamiao(){
        console.log(`Este camião tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Camiao(6, 'Vermelho')

console.log(scania)

scania.descreverCamiao()

Camiao.motor = 4

const c2 = new Camiao(4, 'Preto')

console.log(c2)
console.log(c2.motor)

Camiao.prototype.motor = 4.0

const c3 = new Camiao(6, 'Azul')

console.log(c3)
console.log(c3.motor)


console.log('\n////////// ////////// //////////\n')


// 11 - override
class Humano {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const miguel = new Humano('Miguel', 27)

console.log(miguel)
console.log(Humano.prototype.idade)

Humano.prototype.idade = 'Não definida'

console.log(miguel.idade)
console.log(Humano.prototype.idade)


console.log('\n////////// ////////// //////////\n')


// 12 - symbol
class Aviao{
    constructor(marca, turbina){
        this.marca = marca
        this.turbina = turbina
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao('Boeing', 10)

console.log(boeing)
console.log(boeing[asas])
console.log(boeing[pilotos])


console.log('\n////////// ////////// //////////\n')


// 13 - getters e setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Vocês está a ler: ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(', ')
        this.tags = tagsArray
    }
}

const myPost = new Post('Algum post', 'é um post de programação')

console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adicionarTags = 'programação, javascript, js'

console.log(myPost)


console.log('\n////////// ////////// //////////\n')


// 14 - herança
class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, 'Shark')

console.log(shark)


console.log('\n////////// ////////// //////////\n')


// 15 - instanceof
console.log(shark instanceof Lobo)
console.log(shark instanceof Mamifero)
console.log(shark instanceof Post)

console.log(Lobo instanceof Mamifero)
console.log(new Lobo(4, 'teste') instanceof Mamifero)

console.log(new Post('a', 'b') instanceof Aviao)