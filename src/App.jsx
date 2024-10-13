/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'

export default function App() {
  
  return  <RouterProvider router={router} />
}
