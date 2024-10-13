/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

import React from 'react'



import {  useState } from "react"
import Pedidos from './Pedidos'
import Devolvidos from './Devolvidos'


 
 
 
 export default function PagePedido(){
   const[open,setOpen]= useState(true)

   const alterar=()=>{
   
   }
    
     
     return(
          
          <div>
          
           <p onClick={()=> setOpen(current=> !current)}>Pedidos</p>

           { open === true ?  <Pedidos/> : null}
           <p onClick={()=> setOpen(current => !current )}  >Devolvidos</p>
          {open === false ? <Devolvidos/> : null}
          </div>
          
          

     )
 }