(() => {
    'use strict'

    const loginFormPass = document.getElementById('password')
    const loginFormBtn = document.getElementById('login-form-submit')

    const validatePass = () => {
        if (loginFormPass.value !== '') {
            loginFormBtn.classList.remove('go-casino_disabled')
        } else {
            loginFormBtn.classList.add('go-casino_disabled')
        }
    }

    loginFormPass.addEventListener('input', validatePass)
})()

