/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/
import React from 'react'
import { Link } from 'react-router-dom'
import './correctModal.css'

export default function CorrectModal({isOpen, message,page}) {


    if(isOpen){
        return (
            <div className='backgroundModalCorrect'>
                <div className="correctModal">
                    <img src="/correct-image.png" alt="correctimage" />
                    <p>{message}</p>
                    <Link to={page} className='LinktoPageModal'>OK</Link>
                </div>
            </div>
        )
    }
}
