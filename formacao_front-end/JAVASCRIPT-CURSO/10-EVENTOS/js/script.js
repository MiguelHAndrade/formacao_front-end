// 1 - adicionar eventos
const btn = document.querySelector('#my-button')

btn.addEventListener('click', function(){
    console.log('Clicou Aqui!')
})

console.log('\n////////// ////////// //////////\n')


// 2 - remover eventos
const secondBtn = document.querySelector('#btn')

function imprimirMensagem(){
    console.log('Teste')
}

secondBtn.addEventListener('click', imprimirMensagem)

const thirdBtn = document.querySelector('#other-btn')

thirdBtn.addEventListener('click', () => {
    console.log('Evento removido!')

    secondBtn.removeEventListener('click', imprimirMensagem)
})


console.log('\n////////// ////////// //////////\n')


// 3 - argumento do evento
const myTitle = document.querySelector('#my-title')

myTitle.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})


console.log('\n////////// ////////// //////////\n')


// 4 - propagação
const containerBtn = document.querySelector('#btn-container')
const btnInsideContainer = document.querySelector('#div-btn')

containerBtn.addEventListener('click', () => {
    console.log('Evento 1')
})

btnInsideContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Evento 2')
})


console.log('\n////////// ////////// //////////\n')


// 5 - remover evento padrão
const a = document.querySelector('a')

a.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('Não alterou a página!')
})


console.log('\n////////// ////////// //////////\n')


// 6 - eventos de teclas
document.addEventListener('keyup', (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener('keydown', (e) => {
    console.log(`Pressionou a tecla ${e.key}`)
})


console.log('\n////////// ////////// //////////\n')


// 7 - eventos de mouse
const mouseEvents = document.querySelector('#mouse')

mouseEvents.addEventListener('mousedown', () => {
    console.log('Pressionou o botão')
})

mouseEvents.addEventListener('mouseup', () => {
    console.log('Soltou o botão')
})

mouseEvents.addEventListener('dblclick', () => {
    console.log(' >>>>> Houve click duplo!')
})


console.log('\n////////// ////////// //////////\n')


// 8 - movimento do mouse
document.addEventListener('mousemove', (e) => {
    // console.log(`No eixo X: ${e.x}`)
    // console.log(`No eixo Y: ${e.y}`)
})