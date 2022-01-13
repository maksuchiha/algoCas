(() => {
    'use strict'

    const modalActive = document.querySelector('.problems-item_purple')
    const modal = document.querySelector('.modal')
    const modalClose = document.querySelector('.modal__close')
    const mainContainer = document.querySelector('body')
    const casinoBtn = document.querySelector('.go-casino')


    const modalToggle = () => {
        modal.classList.toggle('modal_active')
        mainContainer.classList.toggle('active')
        casinoBtn.classList.toggle('go-casino_active')
    }

    modalActive.addEventListener('click', (e) => {
        e.preventDefault()
        modalToggle()
    })
    modalClose.addEventListener('click', modalToggle)
})()

