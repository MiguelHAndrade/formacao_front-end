// 1 - setTimeout
console.log('Ainda não executou')

setTimeout(function(){
    console.log('Requisoção Assíncrona!')
}, 2000)

console.log('Ainda não executou 2')


console.log('\n////////// ////////// //////////\n')


// 2 - setInterval
console.log('Ainda não começou')

// setInterval(function(){
//     console.log('Intervalo Assíncrono!')
// }, 3000)

console.log('Ainda não começou')


console.log('\n////////// ////////// //////////\n')


// 3 - promise
const promessa = Promise.resolve(5 + 5)

console.log('Algum codigo')

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`))

console.log('Outro codigo')


console.log('\n////////// ////////// //////////\n')


// 4 - falha na promise
Promise.resolve(5 * 'asd')
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error('Valores inválidos')
    }
})
.catch((err) => console.log(`Um erro ocurreu: ${err}`))


console.log('\n////////// ////////// //////////\n')


// 5 - rejeição
function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve(`O nr é maior que 10`)
        } else{
            reject(new Error('Nr muito baixo!'))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => 
    console.log(`Um erro ocurreu: ${err}`)
)

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => 
    console.log(`Um erro ocurreu: ${err}`)
)


console.log('\n////////// ////////// //////////\n')


// 6 - resolver várias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    } else{
        reject('Erro!')
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))


console.log('\n////////// ////////// //////////\n')


// 7 - Async Functions
async function somarComDelay(a, b){
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é ${value}`)
}) 


console.log('\n////////// ////////// //////////\n')


// 8 - await
function resolveComDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolveu a promise')
        }, 2000)
    })
}

async function chamadaAsync(){
    console.log('A chamar a promise, e á espera do resultado')
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()