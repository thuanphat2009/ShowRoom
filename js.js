const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

const btnMenu = $('.menu-minibox-icon')
const subMenu = $('.overlay')
const closeMenu = $('.close-menu-icon')


btnMenu.onclick = function(){
    subMenu.classList.add('active')
}

closeMenu.onclick = function(){
    subMenu.classList.remove('active')
}