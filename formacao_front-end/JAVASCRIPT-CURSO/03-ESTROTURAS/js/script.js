// 1 - variáveis
let nome = 'Miguel'

console.log(nome)

nome = 'Miguel Andrade'

console.log(nome)

const idade = 28

console.log(idade)

// idade = 18
// console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

console.log('\n////////// ////////// //////////\n')

// 2 - mais sobre variáveis
// let 2test = 'inválido'
// let @test = 'inválido'

let a = 10, b = 20, c = 30
console.log(a)
console.log(b)
console.log(c)
console.log(a, b, c)

const nomecompleto = 'André Ribeiro'
const nomeCompleto = 'Joana Martins'

console.log(nomecompleto)
console.log(nomeCompleto)

let _teste = '_ é Ok.'
let $teste = '$ também é OKAY.'

console.log(_teste, $teste)

console.log('\n////////// ////////// //////////\n')

// 3 - prompt
// const age = prompt('Escreva a Sua idade')

// console.log(`Voçê tem ${age} anos.`)

// 4 - alert
// alert('Testing')

// const z = 10

// alert(`O nr é ${z}.`)

// 5 - Math
console.log(Math.max(5, 3, 7, 2, 10, 30))
console.log(Math.floor(5.88))
console.log(Math.ceil(5.18))


console.log('\n////////// ////////// //////////\n')


// 6 - console
console.log('Teste!')
console.error('Mensagem de erro!')
console.warn('Mensagem de Aviso!')


console.log('\n////////// ////////// //////////\n')


// 7 - if
const m = 10

if (m > 5){
    console.log('M é maior que 5!')
}

const user = 'João'

if (user === 'João'){
    console.log('O Nome do user é João!')
}

if (user === 'Maria'){
    console.log('Olá Maria!')
}

console.log(user === 'João', user === 'Maria')

console.log('\n////////// ////////// //////////\n')


// 8 - else
const loggedIn = false

if (loggedIn) {
    console.log('Está Logado!')
} else {
    console.log('Não está Logado!')
}

const q = 10
let w = 15

if (q > 5 && w > 20){
    console.log('Os números são mais altos!')
} else {

    console.log('Os números não são mais altos!')
}

w = 25

if (q > 5 && w > 20){
    console.log('Os números são mais altos!')
} else {

    console.log('Os números não são mais altos!')
}

// 9 - else if
if (1 > 2){
    console.log('Teste')
} else if (2 > 3){
    console.log('Teste 2')
} else if (5 > 1){
    console.log('Agora sim!')
}

const userName = 'Miguel'
const userAge = 27

if (userName === 'José'){
    console.log('Bem vindo José')
} else if (userName === 'Miguel' && userAge === 27){
    console.log('Olá, Miguel! você tem 27 anos!')
} else {
    console.log('Nenuja condição aceite!')
}


console.log('\n////////// ////////// //////////\n')


// 10 - while
let p = 0

while(p < 5){
    console.log(`Repetir ${p}`)
    p = p + 1
}

// loop infinito!
// let x = 10
// while(x > 5){
//     console.log(`Loop infinito de ${x}`)
// }

console.log('\n////////// ////////// //////////\n')

// 11 - do while
let o = 10

do{
    console.log(`Valor de ${o}`)
    o--
} while (o > 1)

console.log('\n////////// ////////// //////////\n')

// 12 - for
for(let t = 0; t < 10; t++){
    console.log(`A repetir a frase ${t}x!`)
}

let r = 10

for(r; r > 0; r = r - 1){
    console.log(`Repete o r ${r}x`)
}

console.log('\n////////// ////////// //////////\n')


// 13 - Estrotura de código (tab)
for (let u = 0; u < 10; u++){
    if (u * 2 > 10){
        console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0){
            console.log('deu 0')
        }
    }
}

console.log('\n////////// ////////// //////////\n')


// 14 - break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é ${g}`)

    if (g === 17){
        console.log(`O g é 17!`)
        break
    }
}

console.log('\n////////// ////////// //////////\n')


// 15 - continue
for(let s = 1; s < 10; s++){
    // operador resto = %
    if (s % 2 === 0){
        console.log(`Número par!`)
        continue
    }
    console.log(s)
}

console.log('\n////////// ////////// //////////\n')

// 16 - switch
const job = 'Carpinteiro'

switch(job){
    case 'Programador':
        console.log('Você é um Programador')
        break

    case 'Carpinteiro':
        console.log('Você é um Carpinteiro')
        break

    case 'Venderdor':
        console.log('Você é um Vendedor')
        break

    default:
        console.log('Profissão não encontrada!')
}

// switch ERRADO!
const l = 100

switch(l){
    case 200:
        console.log('L é 200')
        
    case 100:
        console.log('L é 100')
        
    case 10:
        console.log('L é 10')
        
    default:
        console.log('L não encontrado!')
}

