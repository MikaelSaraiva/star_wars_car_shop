const addressForm = document.querySelector('#address-info')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const cpf_cnpjInput = document.querySelector('#cpf_cnpj')
const zipcodeInput = document.getElementById("zipcode")
const addressInput = document.querySelector('#address')
const numberInput = document.querySelector('#number')
const address2Input = document.querySelector('#address2')
const cityInput = document.querySelector('#city')
const neighborhoodInput = document.querySelector('#neighborhood')
const stateInput = document.querySelector('#state')


// Função para desabilitar/habilitar as caixas de texto do fomulario de endereço

const toggleDisabled = () => {
    if (addressInput.hasAttribute('disabled')) {
        Array.from(addressForm).forEach((input) => {
            input.removeAttribute('disabled')
        });
    } else {
        Array.from(addressForm).forEach((input) => {
            input.setAttribute('disabled', 'disable')
        });
    }
}

toggleDisabled()

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

// Verifica se é um cpf ou cnpj valido

function isCPFCNPJValid(cpf_cnpj) {
    if (!isFilled(cpf_cnpj)) return false

    // Verifica se é cpf
    if (cpf_cnpj && cpf_cnpj.length === 11
        && cpf_cnpj != "00000000000"
        && cpf_cnpj != "11111111111"
        && cpf_cnpj != "22222222222"
        && cpf_cnpj != "33333333333"
        && cpf_cnpj != "44444444444"
        && cpf_cnpj != "55555555555"
        && cpf_cnpj != "66666666666"
        && cpf_cnpj != "77777777777"
        && cpf_cnpj != "88888888888"
        && cpf_cnpj != "99999999999") {

        console.log('entrei no cpf')
        var soma = 0
        var resto

        for (var i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf_cnpj.substring(i - 1, i)) * (11 - i)
        }

        resto = (soma * 10) % 11

        if ((resto == 10) || (resto == 11)) {
            resto = 0
        }

        if (resto != parseInt(cpf_cnpj.substring(9, 10))) {
            return false
        }
        soma = 0

        for (var i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf_cnpj.substring(i - 1, i)) * (12 - i)
        }

        resto = (soma * 10) % 11

        if ((resto == 10) || (resto == 11)) {
            resto = 0
        }

        if (resto != parseInt(cpf_cnpj.substring(10, 11))) {
            return false
        }

        return true

        //  Se não for um cpf, verifica se é cnpj
    } else if (!cpf_cnpj || cpf_cnpj.length != 14
        || cpf_cnpj == "00000000000000"
        || cpf_cnpj == "11111111111111"
        || cpf_cnpj == "22222222222222"
        || cpf_cnpj == "33333333333333"
        || cpf_cnpj == "44444444444444"
        || cpf_cnpj == "55555555555555"
        || cpf_cnpj == "66666666666666"
        || cpf_cnpj == "77777777777777"
        || cpf_cnpj == "88888888888888"
        || cpf_cnpj == "99999999999999") {
        console.log('entrei onde não devia')
        return false
    }
    console.log('entrei onde devia')

    var tamanho = cpf_cnpj.length - 2
    var numeros = cpf_cnpj.substring(0, tamanho)
    var digitos = cpf_cnpj.substring(tamanho)
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
    numeros = cpf_cnpj.substring(0, tamanho)
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

// Valida entrada do usuário no campo e-mail e informa erro caso tenha inserido algo fora do formato correto

emailInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value

    if (!isEmailValid(inputValue)) {
        emailInput.setCustomValidity('error')
    } else {
        emailInput.setCustomValidity('')
    }

})

// Impede que seja inserido algo difente de números pelo usuário e maior que um número de telefone padrão, onze digitos.

phoneInput.addEventListener('keypress', (event) => {
    const inputValue = event.target.value
    const olyNumbers = /[0-9]/
    const key = event.key

    if (!olyNumbers.test(key) || inputValue.length > 10) {
        event.preventDefault()

        return
    }
})

// Verifica e avisa caso o usuário preencher com menos caracteres que o necessario.

phoneInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value
    if (inputValue.length < 11) {
        console.log(inputValue)
        phoneInput.setCustomValidity('error')
    } else {
        phoneInput.setCustomValidity('')
    }
})

// Impede que o usuário use caracteres que não são usados em CPFs e CNPJs

cpf_cnpjInput.addEventListener('keypress', (event) => {
    const inputValue = event.target.value
    const olyNumbersAndSpecialCharacters = /[0-9.\-\/]/
    const key = event.key

    if (!olyNumbersAndSpecialCharacters.test(key)) {
        event.preventDefault()

        return
    }
})

// Valida se CPF/CNPJ é está correto apos ser inserido.

cpf_cnpjInput.addEventListener('blur', (event) => {
    const inputValue = String(event.target.value).replace(/[^0-9]/g, '')
    console.log("fora do if")


    if (inputValue.length < 10) {
        cpf_cnpjInput.setCustomValidity('error')
        console.log("primeiro if")
        return
    } else if (isCPFCNPJValid(inputValue)) {
        cpf_cnpjInput.setCustomValidity('')
        console.log("segundo if")

        return
    } else {
        console.log("else")

        cpf_cnpjInput.setCustomValidity('error')

        return
    }
})


// Limita o usuario a enviar apenas números

zipcodeInput.addEventListener('keypress', (event) => {
    const olyNumbers = /[0-9]/
    const key = event.key

    if (!olyNumbers.test(key)) {
        event.preventDefault()

        return
    }
})

// Aguarda o usuário preencher o CEP

zipcodeInput.addEventListener('keyup', (event) => {
    const inputValue = event.target.value


    if (inputValue.length >= 8) {

        getAddres(String(inputValue).replace(/[^0-9]/g, ''))

        return

    }
})

// Prenche os dados de endereço baseado no CEP do usuário usando o ViaCep

const getAddres = async (zipcode) => {
    zipcodeInput.setAttribute('disabled', 'disabled')

    const url = `https://viacep.com.br/ws/${zipcode}/json/`
    console.log(url)

    const response = await fetch(url)

    const data = await response.json()

    if (data.erro === true) {
        addressForm.reset()
        zipcodeInput.removeAttribute('disabled')

        if (!addressInput.hasAttribute('disabled')) {
            toggleDisabled()
        }

        return
    }

    if (addressInput.value === '') {
        toggleDisabled()
    }

    addressInput.value = data.logradouro
    neighborhoodInput.value = data.bairro
    cityInput.value = data.localidade
    stateInput.value = data.uf

    zipcodeInput.removeAttribute('disabled')

}