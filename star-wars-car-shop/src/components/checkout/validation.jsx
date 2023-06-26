// import { useEffect } from "react"

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const cpf_cnpj = document.querySelector('#cpf_cnpj')
const zipcode = document.getElementById("zipcode")
const address = document.querySelector('#address')
const number = document.querySelector('#number')
const address2 = document.querySelector('#address2')
const city = document.querySelector('#city')
const neighborhood = document.querySelector('#neighborhood')
const state = document.querySelector('#state')

// Verificador generico se o campo foi preenchido

function isFilled(field) {

    return field === '' ? false : true
}

// Verifica se possui a estrutura de um e-mail

function isEmailValid(email) {

    if (!isFilled(email)) return false

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) return true

    return false
}

// Verifica se possui a quantidade de digitos de um telefone (00 99999 8888)

function isPhoneValid(phone) {

    if (!isFilled(phone)) return false

    const phoneRegex = new RegExp(
        /^[0-9]{11,}$/
    )

    if (phoneRegex.test(phone)) return true

    return false
}

// Verifica se é um cpf ou cnpj valido

function isCPFCNPJValid(cpf_cnpj) {

    if (!isFilled(cpf_cnpj)) return false

    // Verifica se é cpf
    if (cpf || cpf.length === 11
        || cpf != "00000000000"
        || cpf != "11111111111"
        || cpf != "22222222222"
        || cpf != "33333333333"
        || cpf != "44444444444"
        || cpf != "55555555555"
        || cpf != "66666666666"
        || cpf != "77777777777"
        || cpf != "88888888888"
        || cpf != "99999999999") {

        var soma = 0
        var resto

        for (var i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
        }

        resto = (soma * 10) % 11

        if ((resto == 10) || (resto == 11)) {
            resto = 0
        }

        if (resto != parseInt(cpf.substring(9, 10))) {
            return false
        }
        soma = 0

        for (var i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
        }

        resto = (soma * 10) % 11

        if ((resto == 10) || (resto == 11)) {
            resto = 0
        }

        if (resto != parseInt(cpf.substring(10, 11))) {
            return false
        }

        return true

        //  Se não for um cpf, verifica se é cnpj
    } else if (!cnpj || cnpj.length != 14
        || cnpj == "00000000000000"
        || cnpj == "11111111111111"
        || cnpj == "22222222222222"
        || cnpj == "33333333333333"
        || cnpj == "44444444444444"
        || cnpj == "55555555555555"
        || cnpj == "66666666666666"
        || cnpj == "77777777777777"
        || cnpj == "88888888888888"
        || cnpj == "99999999999999") {

        return false
    }

    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0, tamanho)
    var digitos = cnpj.substring(tamanho)
    var soma = 0
    var pos = tamanho - 7

    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
        if (pos < 2) {
            pos = 9
        }
    }

    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

    if (resultado != digitos.charAt(0)) {
        return false
    }

    tamanho = tamanho + 1
    numeros = cnpj.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7

    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
        if (pos < 2) {
            pos = 9
        }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

    if (resultado != digitos.charAt(1)) {
        return false
    }

    return true;
}

// Verifica se é um cep valido e retorna as informações atribuidas a ele

zipcode.addEventListener('keypress', (event) => {
    console.log("OH DEUS")
    const olyNumbers = /[0-9]/
    const key = String.fromCharCode(event.keyCode)

    if (!olyNumbers.test(key)) {
        event.preventDefault()

        return
    }
}) 