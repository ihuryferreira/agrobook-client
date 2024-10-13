/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

import React from 'react'
import { Link } from 'react-router-dom'
import './alertModal.css'

export default function AlertModal({isOpen,setIsOpen, LinkToSucess }) {
    if(isOpen){

        //VALIDA SE OS PARAMETROS FORAM PASSADOS
        if (!setIsOpen || !LinkToSucess) {
            console.error('um ou mais parametros não atribuidos alertmodal')
            return
        }

        return (
            <div className='backgroundModalAlert'>
                <div className="alertModal">
                    <img src="/alert-modal-icon.png" alt="errorImage" />
                    <p>Deseja Mesmo Desabilitar este Usuário? Todos os livros vinculados a ele voltará a constar como disponível!</p>
                    
                    <div className='conteinerBtnModalAlert'>
                        <Link to={'/user'} className='continuosModalAlertButton'>Desabilitar</Link>
                        <button className='cancelModalAlertButton' onClick={()=> setIsOpen(false)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
}
