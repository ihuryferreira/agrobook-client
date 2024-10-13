/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

import React from 'react'
import './errorModal.css'

export default function ErrorModal({isOpen,setIsOpen, message}) {


    if(isOpen){

        //VALIDA SE OS PARAMETROS FORAM PASSADOS
        if (!setIsOpen || !message) {
            console.error('um ou mais parametros não atribuidos modal erro',isOpen,message)
            return
        }

        return (
            <div className='backgroundModalError'>
                <div className="errorModal">
                    <img src="/error-image.png" alt="errorImage" />
                    <p>{message}</p>
                    <button className='closeModalErrorButton' onClick={()=> setIsOpen(false)}>OK</button>
                </div>
            </div>
        )
    }
}
