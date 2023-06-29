// Componentes do formulario de informações pessoais

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const cpf_cnpjInput = document.querySelector('#cpf_cnpj')

// Fomulario de informações de endereço e seus componentes

const addressForm = document.querySelector('#address-info')

const zipcodeInput = document.getElementById("zipcode")
const addressInput = document.querySelector('#address')
const numberInput = document.querySelector('#number')
const address2Input = document.querySelector('#address2')
const cityInput = document.querySelector('#city')
const neighborhoodInput = document.querySelector('#neighborhood')
const stateInput = document.querySelector('#state')

// Componente de seleção do método de pagamento

const paymentMethodSelect = document.querySelector('#paymeny-method')

// Componente que tras informação do boleto

const paymentSlip = document.querySelector('#payment-slip')

// Fomulario de crédito e seus componentes

const creditForm = document.querySelector('#credit')

const cardNumberInput = document.querySelector('#card-number')
const cardCreditLogo = document.querySelector('#card-credit-logo')
const expireInput = document.querySelector('#expire')
const nameOnCardInput = document.querySelector('#name-on-card')
const securityCodeInput = document.querySelector('#security-code')

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

// Verifica se é uma data correta e dentro do prazo de validade

function isDateValid(date) {
    const today = new Date()
    const expirationDay = parseInt(date[0])
    const expirationMonth = parseInt(date[1])
    const expirationYear = parseInt(date[2])

    if (expirationYear > today.getFullYear()) { // Verifica se é um ano valido

        return true
    }

    if (expirationYear === today.getFullYear) {
        if (expirationMonth > today.getMonth) {

            return true

        } else if (expirationMonth === today.getMonth) {
            switch (expirationMonth) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12: {
                    if (expirationDay > 31) {
                        return false
                    }

                    if (expirationDay >= today.getDate()) {
                        return true
                    }
                }

                case 6: case 6: case 9: case 11: {
                    if (expirationDay > 30) {
                        return false
                    }
                    if (expirationDay >= today.getDate()) {
                        return true
                    }
                }
                case 2: {
                    if ((expirationYear % 400 == 0) || (expirationYear % 4 == 0 && expirationYear % 100 != 0))
                        if (expirationDay > 29) {
                            return false

                        } else if (expirationDay > 28) {
                            return false
                        }

                    if (expirationDay >= today.getDate()) {
                        return true
                    }
                }
            }
        }
    }
    console.log('hmmmmmmmmmmmm')
    return false
}

function isCardNumberValid(cardNumber) {
    var value = cardNumber.replace(/\D/g, '');
    var sum = 0;
    var shouldDouble = false;

    for (var i = value.length - 1; i >= 0; i--) {
        var digit = parseInt(value.charAt(i));

        if (shouldDouble) {
            if ((digit *= 2) > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return (sum % 10) == 0;
}


function defineCardBrand(cardNumber) {
    const creditCardsRegex = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
        diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
    }

    const creditCardPath = {
        default: '/src/images/branco-logo.jpeg',
        visa: '/src/images/maestro-logo.png',
        mastercard: '/src/images/maestro-logo.png',
        amex: '/src/images/american-express-logo.png',
        discover: '/src/images/discover-logo.jpg',
        diners_club: '/src/images/diners-club-logo.jpeg',
        jcb: '/src/images/jcb-logo.png'
    }

    if (!isCardNumberValid(cardNumber)) {
        return {
            isValid: false,
            path: creditCardPath.default
        }
    }

    let creditCard = {
        isValid: true,
        path: creditCardPath.default
    }

    Object.keys(creditCardsRegex).forEach((key) => {
        var regex = creditCardsRegex[key];

        if (regex.test(cardNumber)) {

            creditCard.path = creditCardPath[String(key)]

            return creditCard
        }
    });

    return creditCard
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

// Verifica qual metodo de pagamento escolhido para mostrar as informações condizentes

paymentMethodSelect.addEventListener('change', (event) => {
    const selectValue = event.target.value

    if (selectValue === 'credit') {

        creditForm.removeAttribute('hidden')
        paymentSlip.setAttribute('hidden', 'hiddden')

    } else if (selectValue === 'payment-slip') {

        paymentSlip.removeAttribute('hidden')
        creditForm.setAttribute('hidden', 'hidden')

    } else {

        creditForm.setAttribute('hidden', 'hidden')
        paymentSlip.setAttribute('hidden', 'hiddden')

    }
})

// Limita o usuario a enviar apenas números

cardNumberInput.addEventListener('keypress', (event) => {
    const olyNumbers = /[0-9]/
    const key = event.key

    if (!olyNumbers.test(key)) {
        event.preventDefault()

        return
    }
})

// Valida se é um cartão valido e altera logo de bandeira

cardNumberInput.addEventListener('blur', (event) => {
    const inputValue = String(event.target.value).replace(/[^0-9]/g, '')

    const creditCard = defineCardBrand(inputValue)


    if (!creditCard.isValid) {
        cardNumberInput.setCustomValidity('error')
        cardCreditLogo.setAttribute('src', creditCard.path)
    } else {
        cardNumberInput.setCustomValidity('')
        cardCreditLogo.setAttribute('src', creditCard.path)
    }
})

// Limita o usuario a enviar apenas números

expireInput.addEventListener('keypress', (event) => {
    const inputValue = event.target.value
    const olyNumbers = /[0-9]/
    const key = event.key

    if (!olyNumbers.test(key) || inputValue.length > 9) {
        event.preventDefault()

        return
    }
})

// Coloca '/' conforme a data é colocada

expireInput.addEventListener('keypress', (event) => {
    const valueInput = event.target.value

    if (valueInput.length === 2 || valueInput.length === 5) {
        event.target.value += '/'
    }
})

// Alerta o usuário caso a data seja de alguma forma invalida, errada ou expirada.

expireInput.addEventListener('blur', (event) => {
    let valueInput = event.target.value

    const dateInput = valueInput.split('/')

    if (!isDateValid(dateInput)) {
        expireInput.setCustomValidity('error')
    } else {
        expireInput.setCustomValidity('')

    }
})

// Verifica se o input do usuário é pelo menos duas palavras sendo a primeira de no minimo 2 digitos

nameOnCardInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value
    const nameRegex = /^[a-zA-Z]{2,}\ [a-zA-Z]*/

    if (nameRegex.test(inputValue)) {
        console.log('dentro do if')
        nameOnCardInput.setCustomValidity('')

        return
    }
    console.log('fora do if')

    nameOnCardInput.setCustomValidity('error')
})

// Limita o usuario a enviar apenas números

securityCodeInput.addEventListener('keypress', (event) => {
    const inputValue = event.target.value
    const olyNumbers = /[0-9]/
    const key = event.key

    if (!olyNumbers.test(key) || inputValue.length > 3) {
        event.preventDefault()

        return
    }
})

// Verifica se tem o formato de CVV valido

securityCodeInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value
    const amexCreditCardRegex = /^3[47][0-9]{13}$/
    const creditCard = cardNumberInput.value

    if (amexCreditCardRegex.test(creditCard)) {
        if ((/^\d{4}$/).test(inputValue)) {
            securityCodeInput.setCustomValidity('')

            return
        } else {
            securityCodeInput.setCustomValidity('error')

            return
        }
    } else if ((/^\d{3}$/).test(inputValue)) {
        securityCodeInput.setCustomValidity('')

        return
    }

    securityCodeInput.setCustomValidity('error')
})