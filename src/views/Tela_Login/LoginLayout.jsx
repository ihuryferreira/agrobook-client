/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

////////////////////////////////
// ROTA LAYOUT PARA O LOGIN //
////////////////////////////////

import React from 'react'
import { Outlet } from 'react-router-dom'
import './LoginLayout.css'

export default function LoginLayout() {
  return (

  <div className="login">
      <Outlet/>
  </div>

  )
}
