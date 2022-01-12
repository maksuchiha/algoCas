(() => {
    'use strict'

    const modalActive = document.querySelector('.problems-item_purple')
    const modal = document.querySelector('.modal')
    const modalClose = document.querySelector('.modal__close')


    const modalToggle = () => {
        modal.classList.toggle('modal_active')
        document.body.classList.toggle('overf_active')
    }

    modalActive.addEventListener('click', (e) => {
        e.preventDefault()
        modalToggle()
    })
    modalClose.addEventListener('click', modalToggle)
    window.addEventListener('scroll', showBtnCasino)
})()

