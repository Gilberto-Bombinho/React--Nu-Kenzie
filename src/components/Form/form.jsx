import './form.css'
import { useState } from 'react';

export function Form ({addTransation, listTransactions}){
  const [idCount, setIdCount] = useState(1)
  
  const [valor, setValor] = useState({
    valor: 0, description: '', id: 0, type: 'Entrada', 
  })

  function handleSubmit(event){
    event.preventDefault()
    setValor({...valor, id: idCount})
    if(valor.type == 'Saída'){
      valor.valor *= (-1)
    }
    addTransation(valor)
    setIdCount(idCount + 1)
  }

  return (
    <form className='form_container' onSubmit={handleSubmit}>
      <p className='description'>Descrição</p>
      <input className='input_description' placeholder='Digite aqui sua descrição' type='text' onChange={(event)=>setValor({...valor, description: event.target.value})}/>
      <p className='example'>Ex: Compra de roupas</p>
      <section className='value_container'>
      <div>
      <p className='description'>Valor</p>
      <input placeholder='0,00 R$' className='input_value' type='number' onChange={(event)=> setValor({... valor, valor: parseFloat(event.target.value)})}/>
      </div>
      <div>
      <p className='description'>Tipo de Valor</p>
      <select className='input_select' onChange={(event)=>setValor({...valor, type: event.target.value})}>
        <option value='Entrada'>Entrada</option>
        <option value='Saída'>Saída</option>
      </select>
      </div>
      </section>
      <button className='insert_button' type='submit'>Inserir Valor</button>
    </form>
  )
}