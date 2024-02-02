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

