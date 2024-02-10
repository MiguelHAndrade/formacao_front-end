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