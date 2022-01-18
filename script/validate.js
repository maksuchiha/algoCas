(() => {
    'use strict'

    const loginForm = document.getElementById('loginform')
    const loginFormBtn = document.getElementById('wp-submit')


    loginForm.addEventListener('input', (e) => {
        if (e.target.closest('input')) {
            if (e.target.value !== '') {
                loginFormBtn.classList.remove('go-casino_disabled')
            } else {
                loginFormBtn.classList.add('go-casino_disabled')
            }
        }
    })
})()

