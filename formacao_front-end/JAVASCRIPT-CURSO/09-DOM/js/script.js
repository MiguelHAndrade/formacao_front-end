// 1 - mover pelo DOM
console.log(document.body)

console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)


console.log('\n////////// ////////// //////////\n')


// 2 - getELementsByTagName
const listItems = document.getElementsByTagName('li')

console.log(listItems)


console.log('\n////////// ////////// //////////\n')


// 3 - getElementById
const title = document.getElementById('title')

console.log(title)


console.log('\n////////// ////////// //////////\n')


// 4 - getElementsByClassName
const products = document.getElementsByClassName('product')

console.log(products)


console.log('\n////////// ////////// //////////\n')


// 5 - querySelector / querySelectorAll
const productsQuery = document.querySelectorAll('.product')

console.log(productsQuery)

const mainContainer = document.querySelector('#main-container')

console.log(mainContainer)


console.log('\n////////// ////////// //////////\n')


// 6 - insertBefore
const p = document.createElement('p')

console.log(p)

const header = title.parentElement

console.log(header)

header.insertBefore(p, title)


console.log('\n////////// ////////// //////////\n')


// 7 - appendChild
const navLinks = document.querySelector('nav ul')

const li = document.createElement('li')

navLinks.appendChild(li)


console.log('\n////////// ////////// //////////\n')


// 8 - replaceCHild
const h2 = document.createElement('h2')

h2.textContent = 'Meu novo título!'

header.replaceChild(h2, title)


console.log('\n////////// ////////// //////////\n')


// 9 - createTextNode
const myText = document.createTextNode('Vou colocar outro título!')

console.log(myText)

const h3 = document.createElement('h3')

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)


console.log('\n////////// ////////// //////////\n')


// 10 - getAttribute e setAttribute
const firstLink = navLinks.querySelector('a')

console.log(firstLink)

firstLink.setAttribute('href', 'https://www.google.com/')

console.log(firstLink.getAttribute('href'))

firstLink.setAttribute('target', '_blank')

console.log(firstLink.getAttribute('target'))


console.log('\n////////// ////////// //////////\n')


// 11 - altura e largura
const footer = document.querySelector('footer')

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)


console.log('\n////////// ////////// //////////\n')


// 12 - posição do elemento
const product1 = products[0]

console.log(product1.getBoundingClientRect())


console.log('\n////////// ////////// //////////\n')


// 13 - Estilos com JS
mainContainer.style.color = 'red'
mainContainer.style.backgroundColor = 'aqua'
mainContainer.style.paddingBottom = '10px'


console.log('\n////////// ////////// //////////\n')


// 14 - Alterar estilos de vários elementos
for(const li of listItems){
    li.style.backgroundColor = '#ddd'
}