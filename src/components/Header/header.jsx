import { useState } from 'react'
import KenzieLogo from '../../assets/NuKenzie.svg'
import './header.css'


export function Header ({setIsHome}) {
  
  return (
    <header className='header_container'>
      <img className='header_logo' src= {KenzieLogo} alt='' />
      <button type='button' onClick={() => setIsHome(true)}>Inicio</button>
    </header>
  )
}