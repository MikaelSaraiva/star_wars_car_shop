import React from 'react'
import Input from '../components/checkout/Input'
import SubmitButton from '../components/checkout/SubmitButton'

const validation = document.createElement('script')

validation.src = '/src/components/checkout/validation.jsx'
validation.async = true

document.body.appendChild(validation)

const Checkout = () => {

  return (
    <div className="checkout">
      <h2>Infomações Pessoais</h2>
      <form id='personal-info'>

        <Input type='text' text='Nome' name='name' required='true' />
        <Input type='text' text='E-mail' name='email' required='true' errorMessage='Digite um email valido no formato email@email.com.' />
        <Input type='text' text='Telefone' name='phone' required='true' errorMessage='Digite um telefone sem caracteres especiais e com 11 digitos.' />
        <Input type='text' text='CPF/CNPJ' name='cpf_cnpj' required='true' errorMessage='CPF ou CNPJ invalido.' />
      </form>

      <h2>Informações de Endereço</h2>

      <Input type='text' text='CEP' name='zipcode' required='true' placeholder='Digite seu CEP' errorMessage='Envie um cep valido e sem caracteres especiais e espaços. Ex: 99999999.' />

      <form id='address-info'>
        <Input type='text' text='Endereço' name='address' />
        <Input type='text' text='Número' name='number' required='true' />
        <Input type='text' text='Complemento' name='address2' />
        <Input type='text' text='Cidade' name='city' />
        <Input type='text' text='Bairro' name='neighborhood' />
        <Input type='text' text='UF' name='state' />
      </form>

      <SubmitButton text='Confirmar' />
      <div className="productInfo">

      </div>
    </div>
  )
}

export default Checkout