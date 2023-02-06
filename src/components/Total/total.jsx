import './total.css'

export function Total({ listTransactions }) {
  return (
    <section className='total_container'>
      <div className='total_sum'>
        <p className="total"> Valor Total: </p>
        <span className='total_value'> $ 
          {' '}
          {listTransactions.reduce((soma, valorAtual) => {
            return soma + valorAtual.valor
          }, 0)}{' '}
        </span>
      </div>
      <p className='total_description'>O valor se refere ao saldo</p>
    </section>
  )
}


