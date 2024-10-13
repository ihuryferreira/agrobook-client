/*
  CRIADO POR: Fillype da Silva Macedo Cunha
  EMAIL: fillypecunha@gmail.com
*/
import Estoque_Book from './BookEstoque'
import addandRemove from '../scripts/functions'
import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../style/Estoque.css"

function EstoquePage() {
  const { book, removeBook } = addandRemove()
  const [books, setBooks] = useState([
    {
      "_id": "001",
      "titulo": "Carrengando...",
      "capa": "https://th.bing.com/th/id/R.78364883c679d5596be1627890ae2abe?rik=HrDn9sFy7iYKTQ&pid=ImgRaw&r=0",
      "sinopse": "Carregando...",
      "paginas": 0,
      "categorias": [
        "ação",
        "comedia",
        "drama"
      ],
      "autor": "Carregando...",
      "idioma": "Aguarde...",
      "data_lancamento": 1700614011,
      "total_estoque": 0,
      "registro_criado_em": 1700614011,
      "registro_atualizado_em": 1700614011
    }
  ]);

  // PUXA DADOS DA API
  const listaLivros = async (e) => {
    try {
      // BODY DA REQUISIÇÃO
      let data = {
        "filter": {
          "titulo": { "$regex": "a", "$options": "i" }
        },
        "sort": {
          "_id": -1
        },
        "limit": 100
      };

      // FUNÇÃO QUE PUXA DADOS DA API
      const resposta = await axios.post(
        "http://localhost:57601/api/book/list_book",
        data,
        {
          withCredentials: true,
        }
      );

      // DEFINE OS LIVROS
      setBooks(resposta.data.data_base.result);
      return resposta.data.data_base.result

    } catch (err) {
      console.log(err);
    }
  }

  // EXECULTA APENAS UMA VEZ A SOLICITAÇÃO A API
  useEffect(() => {
    listaLivros().then((listLivros) => {})
  }, []);

  // CODIGO
  return (
    <>
      <div className='div_search'>
        <input type="text" className='input_search_home' />
        <button className='button_search_home'><i className='bx bx-search'></i></button>
      </div>



      <div className='div_button_novo' >
        <Link to="formEstoque" ><button className='button_estoque_novo' >novo</button></Link>
      </div>

      <div className='container_estoque'>

        {books.map((book) => {
          return (


            <div className='div_estoque_page' key={book._id}>

              <img className='img_estoque' src={book.capa} alt="err" srcset="" />
              <h2 className='titulo_estoque'>{book.titulo}</h2>
              <div className='div_button_estoque'>
                <Link to={`estoque/${book._id}`} ><button className='button_estoque_editar' >editar</button></Link>
              </div>


            </div>




          )
        })}
      </div>




    </>
  )
}

export default EstoquePage
