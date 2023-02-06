import './home.css'
import { useState } from 'react'
import KenzieLogo from '../../assets/NuKenzieBranco.svg'
import Mobile from '../../assets/mobile.svg'

export function Home ({setIsHome}) {

  return (

    <section className='home_container'>
      <div className='title_container'>
      <img src={KenzieLogo} alt="" />
      <h1 className='title_home'>Centralize o controle de suas finanças</h1>
      <p className='title_description'>de forma rápida e segura</p>
      <button className='enter_button' type='button' onClick={() => setIsHome(false)}> Iniciar</button>
      </div>
      <div>
        <img src={Mobile} alt="" />
      </div>
      </section>
  )
}