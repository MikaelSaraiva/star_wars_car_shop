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

        <Input type='text' text='Nome' name='name' />
        <Input type='text' text='E-mail' name='email' />
        <Input type='number' text='Telefone' name='phone' />
        <Input type='text' text='CPF/CNPJ' name='cpf_cnpj' />
        <h2>Informações de Endereço</h2>
      </form>

      <Input type='text' text='CEP' name='zipcode' placeholder='Digite seu CEP' />

      <form id='address-info'>
        <Input type='text' text='Endereço' name='address' />
        <Input type='text' text='Número' name='number' />
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