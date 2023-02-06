import './list.css'
import BotaoFechar from '../../assets/trash.svg'

export function List({ listTransactions, setListTransactions }) {
  function deleteTransation(id) {
    const filterlist = listTransactions.filter(list => {
      if (list.id != id) {
        return list
      }
    })
    setListTransactions(filterlist)
  }

  return (
      <ul className='ul_transaction'>
        {listTransactions.map(transation => (
          transation.type === 'Entrada' ? (
          <li style={{borderLeft: '4px solid #03B898', borderRadius: '4px 0px 0px 4px'}} className='card_transaction' key={transation.id}>
            <div>
            <p className='title_transaction'> {transation.description} </p>
            <p className='type_transaction'> {transation.type} </p>
            </div>
            <p className='value_transaction'> R$ {transation.valor},00 </p>
            <button onClick={() => deleteTransation(transation.id)}>
              <img src={BotaoFechar} alt='' /> 
            </button>
          </li>):
          (
            <li className='card_transaction' key={transation.id}>
            <div>
            <p className='title_transaction'> {transation.description} </p>
            <p className='type_transaction'> {transation.type} </p>
            </div>
            <p className='value_transaction'> R$ {transation.valor},00 </p>
            <button onClick={() => deleteTransation(transation.id)}>
              <img src={BotaoFechar} alt='' /> 
            </button>
          </li>
          )
          
        ))}
      </ul>
      
  )
}
