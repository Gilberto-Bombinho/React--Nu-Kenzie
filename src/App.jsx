import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Form } from './components/Form/form'
import { List } from './components/List/list'
import {Total} from './components/Total/total'
import { Header } from './components/Header/header'
import { Home } from './components/Home/home'
import './App.css'

function App() {

  const [listTransactions, setListTransactions] = useState([])

  const [isHome, setIsHome] = useState(true)

  function addTransation(newTransation){
    setListTransactions([...listTransactions, newTransation])
  }

  return (
    <div className='App'>
      {isHome?(<Home setIsHome={setIsHome}/>)
      :
      (
      <main className='main_container'>
      <Header setIsHome={setIsHome}/>
      <section className='desktop_container'>
        <div className='transaction_container'>
      <Form addTransation={addTransation} listTransactions={listTransactions} />
      <Total listTransactions={listTransactions}/>
      </div>
      <div className='list_container'>
      <h2 className='resume'>Resumo Financeiro</h2>
     { listTransactions.length < 1 ? (<h2 className='possui'>Você ainda não possui nenhum lançamento</h2>): (
      <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
      )}</div>
      </section>
      </main>
      )
     }
     
    </div>
  )
}

export default App
