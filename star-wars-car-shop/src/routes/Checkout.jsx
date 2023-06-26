import React from 'react'
import Input from '../components/checkout/Input'
import SubmitButton from '../components/checkout/SubmitButton'

const Checkout = () => {
  const handleChange = (e) => {

  }

  return (
    <div className="checkout">
      <h2>Infomações Pessoais</h2>

      <Input type='text' text='Nome' name='name' id='name' />
      <Input type='text' text='E-mail' name='email' id='email' />
      <Input type='number' text='Telefone' name='phone' id='phone' />
      <Input type='text' text='CPF/CNPJ' name='cpf_cnpj' id='cpf_cnpj' />
      <h2>Informações de Endereço</h2>
      <Input type='text' text='CEP' name='zipcode' placeholder='Digite seu CEP' />
      <Input type='text' text='Endereço' name='address' id='address' />
      <Input type='text' text='Número' name='number' id='number' />
      <Input type='text' text='Complemento' name='address2' id='address2' />
      <Input type='text' text='Cidade' name='city' id='city' />
      <Input type='text' text='Bairro' name='neighborhood' id='neighborhood' />
      <Input type='text' text='UF' name='state' id='state' />


      <SubmitButton text='Confirmar' />
      <div className="productInfo">

      </div>
    </div>
  )
}

export default Checkout