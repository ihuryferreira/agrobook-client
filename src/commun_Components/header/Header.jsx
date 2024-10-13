/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/


import React, { useState, useEffect  } from 'react'
import { Link, Navigate } from 'react-router-dom'
import MenuLateral from '../menu_lateral/MenuLateral'
import './HeaderStyle.css'

import books from '../../views/Home/components/script/bd'
import FilterBook from '../../views/Home/components/filterBook'


 
export default function Header({ search }) {
    const [openMenu, setOpenMenu] = useState(false)
    const [user, setUser] = useState({})
    const[bookTitle, setbookTitle]= useState("")
    const [ filterBook, setfilterBook]= useState("")
    const[status, setStatus]=useState(false)


    useEffect(() => {
      // Recuperar dados da sessionStorage ao carregar o componente
      const dataUserFromSession = sessionStorage.getItem('dataUser');
  
      if (dataUserFromSession) {
        const userData = JSON.parse(dataUserFromSession);
        setUser(userData);
      }else{
        window.location.href = '/'
      }
    }, []); // O array vazio faz com que esse efeito colateral seja executado apenas uma vez, ao montar o componente


  let handlefilter=({})=>{
    books
  setfilterBook = books.filter((livro) => livro.titulo.toLowerCase().includes(bookTitle.toLowerCase()) );
  

   }
  
    

  return (
    <div className='HeaderContainer'>
        
            <button onClick={()=> setOpenMenu(true)} className='button-menu'><i className='bx bx-menu'></i></button>
            
            {search ?     //RENDERIZA O BOTÃO CASO ELE TENHA FUNCIONALIDADE
              <div>
               
               <input  onChange={(ev)=>setbookTitle(ev.target.value) }  type="text" placeholder='Buscar Livros...' className='input-header'  />
               <button  onClick={() => search()} className='button-search'><i className='bx bx-search'></i></button>
              </div> 
              : null
            }
            {status === true ? <Navigate to={"filter"} /> : null}

            <Link to={'/home'} className='Link-img-logo-header'> <img className='img-logo-header'src='/small-logo.png'></img> </Link>
        <MenuLateral user={user} isOpen={openMenu} setIsOpen={setOpenMenu}/>
    </div>
  )
}
