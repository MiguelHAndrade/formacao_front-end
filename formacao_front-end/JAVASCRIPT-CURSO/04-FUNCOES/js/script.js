// 1 - criar uma função 
function minhaFuncao(){
    console.log('Teste de função')
}

minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function () {
    console.log('Função em Variável')
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt){
    console.log(`Imprimir: ${txt}`)
}

funcaoComParametro('Imprimir algo')
funcaoComParametro('Outra Função')


console.log('\n////////// ////////// //////////\n')


// 2 - return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1 + n2
}

const resultado = soma(a, b)

console.log(resultado)

console.log(soma(c, d))


console.log('\n////////// ////////// //////////\n')


// 3 - filtro das funões
let y = 10

function testandoFiltro(){
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}

testandoFiltro()

console.log(`Y fora da função é ${y}`)

testandoFiltro()


console.log('\n////////// ////////// //////////\n')

// 4 - filtro aninhado
let m = 10

function filtroAninhado(){
    let m = 20

    if(true){
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

filtroAninhado()

console.log(m)


console.log('\n////////// ////////// //////////\n')

// 5 - arrow function
const testArrow = () => {
    console.log('Esta é uma arrow function!')
}

testArrow()

const parOuImpar = (n) => {
    if (n % 2 === 0){
        console.log('Par')
        return
    }
    
    console.log('Impar')
}

parOuImpar(5)
parOuImpar(10)


console.log('\n////////// ////////// //////////\n')

// 6 - mais sobre arrow functions
const xAoQuadrado = (x) => {
    return x * x
}

console.log(xAoQuadrado(4))

const xAoQuadrado2 = (x) => x * x

console.log(xAoQuadrado2(5))
console.log(xAoQuadrado2(12))

const helloWorld = () => console.log('Hello World!')

helloWorld()


console.log('\n////////// ////////// //////////\n')

// 7 - argumentos opcionais
const multiplication = function(m, n){
    if (n === undefined){
        return m * 2
    } else{
        return m * n
    }
}

console.log(multiplication(5))
console.log(multiplication(2, 4))

const greeting = (nameIs) => {
    if (!nameIs){
        console.log('Olá')
        return
    }

    console.log(`Olá ${nameIs}`)
}

greeting('Miguel')
greeting('Inês')
greeting()


console.log('\n////////// ////////// //////////\n')


// 8 - Valor default
const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}`
}

customGreeting()

console.log(customGreeting('Miguel'))
console.log(customGreeting('Inês', 'Bom dia'))

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText('Boas!')
repeatText('Repete 5x', 5)


console.log('\n////////// ////////// //////////\n')


// 9 - Closure
function someFunction() {
    let txt = 'Alguma coisa'

    function display(){
        console.log(txt)
    }

    display()
}

someFunction()


console.log('\n////////// ////////// //////////\n')


// 10 - Mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))


console.log('\n////////// ////////// //////////\n')

// recursão
const untilTen = (n, m) => {
    if (n < 10){
        console.log('A Função parou de executar!')
    } else{
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 10)

function factorial(x) {
    if (x === 0){
        return 1
    } else{
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O factorial do número ${num} é ${result}`)

