(() => {
    'use strict'

    const showText = () => {
        document.querySelector('.faq__list').addEventListener('click', (e) => {
            if (e.target.closest('.faq-item')) {
                e.target.closest('.faq-item').querySelector('.faq-item__list')
                    .classList.toggle('faq-item__list_active')
                e.target.closest('.faq-item').querySelector('.faq-item__arrow')
                    .classList.toggle('faq-item__arrow_active')
            }
        })
    }

    showText()

})()