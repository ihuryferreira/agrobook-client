/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

////////////////////////////////
// ROTA LAYOUT PARA O ESTOQUE //
////////////////////////////////
import React from 'react'
import Header from '../../commun_Components/header/Header'
import { Outlet } from 'react-router-dom'

export default function EstoqueLayout() {
  return (
    <>
        <Header search={undefined}/> 
        <Outlet/>
    </>
  )
}
