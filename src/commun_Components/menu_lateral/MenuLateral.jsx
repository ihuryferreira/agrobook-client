/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

import React from 'react'
import { Link } from 'react-router-dom'
import extractInitials from './scripts/extractInitials';
import './MenuLateralStyle.css'

export default function MenuLateral({user, isOpen, setIsOpen}) {
  
  if (isOpen) {

   
    //VALIDA SE OS PARAMETROS FORAM PASSADOS
    if (!setIsOpen || !user) {
      console.error('um ou mais parametros não atribuidos Menu Lateral')
      return
    }
    const InitialsName = extractInitials(user.nome); //retorna as iniciais do Nome
    return (
        <div className='black-container'>
          <div className='menu-lateral-container'>
            <button onClick={()=> setIsOpen(false)} className='button-close-menu'><i className='bx bx-x'></i></button> {/*Fechar modal redirecionando para o path atual em q se encontra */}
          
            <div className='handlerperfilcontainer'>
              <div className="perfilContainer" ><p>{InitialsName}</p></div>
            </div>
            <p className='menu-user-name'>{user.nome}</p> {/*Nome do Usuário */}
            {/*LINK PARA A TELA INICIAL*/}
            <Link to={'/home'} className='linkto-container'>
              <img src='/home-icon.png' alt='home-icon' />
              <p>Tela Inicial</p>
            </Link>
            {/*LINK PARA A TELA DE CADASTRO*/}
            {
              user.cargo == 0 ? //verifica se o user é qualificado
                <Link to={'/user'} className='linkto-container'>
                  <img src='/cadastro-icon.png' alt='cadastro-icon' />
                  <p>Cadastro</p>
                </Link>
                : null
            }
            {/*LINK PARA A TELA ESTOQUE*/}
            {
              user.cargo == 0 ? //verifica se o user é qualificado
                <Link to={'/storage'} className='linkto-container'>
                  <img src='/livros-icon.png' alt='livros-icon' />
                  <p>Estoque</p>
                </Link>
                : null
            }
            {/*LINK PARA A TELA MINHA BIBLIOTECA*/}
            <Link to={'/'} className='linkto-container'>
              <img src='/livro-icon.png' alt='livro-icon' />
              <p>Minha Biblioteca</p>
            </Link>
            {/*LINK PARA A TELA PEDIDOS*/}
            <Link to={'/orders'} className='linkto-container'>
              <img src='/pedidos-icon.png' alt='pedidos-icon' />
              <p>Pedidos</p>
            </Link>
            <div className="logoContainer" >
              <img src="/logo-image.png" alt="logo-image" />
            </div>
          </div>
        </div>
    )
  } else {
    return null
  }
}
