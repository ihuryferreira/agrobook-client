/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

import React from 'react'
import Header from '../../commun_Components/header/Header'
import { Outlet } from 'react-router-dom'

export default function PedidosLayout() {
  return (
    <>
      <Header search={undefined}/>
      <Outlet/>
    </>
    
  )
}
