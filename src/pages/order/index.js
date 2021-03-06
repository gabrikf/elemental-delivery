import React, { useState } from 'react'


const Order = () => {

  const [person, setPerson] = useState('')
  const [adress, setAdress] = useState('')
  const [type, setType] = useState('')
  const [amount, setAmount] = useState('')
  const [filling, setFilling] = useState('')



  const handleNewOrder = async(e) => {
    e.preventDefault()
    const data = {
      person,
      adress,
      type,
      amount,
      filling
    }
      const messege = `Olá, meu nome é ${data.person}, meu endereço é ${data.adress}, eu gostaria de pedir ${data.amount} ${data.type}(s), com recheio de ${data.filling}. Muito obrigado.`
      await window.open(`https://api.whatsapp.com/send?phone=5547997608709&text=${messege}`)
  }

  return (
    <div className='bg-gray-400 mx-3 my-24 flex md:mx-80 md:my-40 md:border-4 md:rounded-md md:shadow'>
      <div className='flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5'>
        <h1 className='font-bold text-2xl my-10 text-white'> FAÇA SEU PEDIDO </h1>
    <form onSubmit={handleNewOrder} className='mt-2 flex flex-col lg:w-1/2 w-10/12'>
              <div className='flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10'>
                <input
                  type='text'
                  className='flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none'
                  placeholder='Nome:'
                  name='person'
                  value={person}
                  onChange={e => setPerson(e.target.value)}
                />
              </div>
              <div className='flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-6'>
                <input
                  type='text'
                  className='flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none'
                  placeholder='Endereço:'
                  name='adress'
                  value={adress}
                  onChange={e => setAdress(e.target.value)}
                />
              </div>
              <div className='flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-6'>
                <select 
                className='flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none'
                name='type'
                value={type}
                onChange={e => setType(e.target.value)}
                >
                  <option>Selecione o tipo da carne...</option>
                  <option>Frango</option>
                  <option>Costela Bovina</option>
                  <option>Costela Suína</option>
                  <option>Filé Duplo</option>
                </select>
              </div>
              <div className='flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-6'>
                <select 
                className='flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none'
                name='amount'
                value={amount}
                onChange={e => setAmount(e.target.value)}
                >
                  <option>Selecione a quantidade...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <div className='flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-6'>
                <select 
                className='flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none'
                name='filling'
                value={filling}
                onChange={e => setFilling(e.target.value)}
                >
                  <option>Selecione o recheio...</option>
                  <option>Aipim com bacon</option>
                  <option>Miúdos</option>
                  <option>Farofa</option>
                  <option>Sem recheio</option>
                </select>
                
              </div>
              <p className='text-white italic mb-4'>Ao finalizar, seu pedido sera enviado para nosso WhatsApp, caso queira fazer mais alguma expecificação, poderá continuar a conversa por lá.</p>
              <button 
              type='submit' 
              className='bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-10 font-bold'
              >
                FINALIZAR PEDIDO
              </button>
            </form>
      </div>
    </div>
  )
}

export default Order 

