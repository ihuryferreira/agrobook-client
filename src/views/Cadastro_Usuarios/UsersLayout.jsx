/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

/////////////////////////////////////////////
// ROTA LAYOUT PARA O CADASTRO DE USUÁRIOS //
/////////////////////////////////////////////

import React from 'react'
import Header from '../../commun_Components/header/Header'
import { Outlet } from 'react-router-dom'
import './userLayout.css'

export default function UsersLayout() {
  return (
    <>
    <Header search={undefined}/>
    <Outlet/>
    </>
    
  )
}
