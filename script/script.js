(() => {
    'use strict'

    const modalActive = document.querySelector('.problems-item_purple')
    const modal = document.querySelector('.modal')
    const modalClose = document.querySelector('.modal__close')
    const gtnGoCasino = document.querySelector('.go-casino')

    const modalToggle = () => {
        modal.classList.toggle('modal_active')
        document.body.classList.toggle('overf_active')
    }

    const showBtnCasino = () => {
        if (window.scrollY > 640) {
            gtnGoCasino.classList.add('go-casino_active')
        } else {
            gtnGoCasino.classList.remove('go-casino_active')
        }
    }

    modalActive.addEventListener('click', modalToggle)
    modalClose.addEventListener('click', modalToggle)
    window.addEventListener('scroll', showBtnCasino)
})()

