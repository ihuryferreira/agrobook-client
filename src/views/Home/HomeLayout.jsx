/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

////////////////////////////////
// ROTA LAYOUT PARA A HOME //
////////////////////////////////

import React from 'react'
import Header from '../../commun_Components/header/Header'
import { Outlet } from 'react-router-dom'
import FilterBooK from './components/filterBook'

export default function HomeLayout() {
  return (
    <>
        <Header search={()=>{console.log(3)}}/>
       
        <Outlet/>
    </>
  )
}
