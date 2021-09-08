const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const btnMenu = $('.menu-minibox-icon')
const subMenu = $('.overlay')


btnMenu.onclick = function(){
    subMenu.classList.add('active')
}