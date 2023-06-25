import React from 'react'
import Input from '../components/checkout/Input'

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Infomações Pessoais</h2>
      <Input type='text' text='Nome' name='name' />
      <Input type='text' text='E-mail' name='email' />
      <Input type='text' text='Telefone' name='phone' />
      <Input type='text' text='CPF/CNPJ' name='cpf_cnpj' />
      <h2>Informações de Endereço</h2>
      <Input type='text' text='CEP' name='zipcode' />
      <Input type='text' text='Endereço' name='address' />
      <Input type='text' text='Número' name='number' />
      <Input type='text' text='Complemento' name='address2' />
      <Input type='text' text='Cidade' name='city' />
      <Input type='text' text='Bairro' name='neighborhood' />
      <Input type='text' text='UF' name='state' />

    <button>Confirmar</button>
    </div>
  )
}

export default Checkout