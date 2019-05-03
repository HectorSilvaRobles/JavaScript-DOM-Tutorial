// var titles = document.getElementsByClassName('title');

// Turns HTMLcollection (titles) into an array
// Array.from(titles)

const wmf = document.querySelector('#book-list li:nth-child(2) .name')

var books = document.querySelectorAll('#book-list li .name')


Array.from(books).forEach(function(books){
    console.log(books.textContent += ' (Book Title)')
})

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books<h2>'
// bookList.innerHTML += '<p>This is how you add HTML</p>'

// Nodes
const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is:', banner.nodeType)
console.log('#page-banner node type is:', banner.nodeName)
console.log('#page-banner has child nodes:', banner.hasChildNodes())

const clonedBanner = banner.cloneNode(true)
console.log(clonedBanner)

// Transversing the DOM
const booksList = document.querySelector('#book-list')
// transversing up the DOM by getting the parent of a node/element
console.log('the parent node is', booksList.parentNode)
console.log('the parent element is', booksList.parentElement.parentElement)
// transversing down the DOM by getting the children of a node/element
console.log(booksList.childNodes)

const booksList2 = document.querySelector('#book-list')
console.log('book list next sibiling is:', booksList2.nextSibling)
console.log('book list next element sibiling is:', booksList2.nextElementSibling)

console.log('book list previous sibiling is:', booksList2.previousSibling)
console.log('book list previous element sibiling is:', booksList2.previousElementSibling)

booksList2.previousElementSibling.querySelector('p').innerHTML += '<br>to cool for everyone else</br>'

// Event listener
var h2 = document.querySelector('#book-list h2')
h2.addEventListener('click', function(e){
    console.log(e.target)
    console.log(e)
})

// adding eventListener to each individual item using a forEach
var exe = document.querySelectorAll('#book-list .delete')
Array.from(exe).forEach(function(exe){
    exe.addEventListener('click', function(e){

        // removing list item when exe event 'click' is ran
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)


    })
})