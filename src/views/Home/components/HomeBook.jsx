/*
  CRIADO POR: Fillype da Silva Macedo Cunha
  EMAIL: fillypecunha@gmail.com
*/


import React, { useRef, useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import "../style/homeBook.css"

export default function HomeBook() {

  const { bookID } = useParams() //Pega o ID passado na URL
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
  const infoBook = async (e) => {
    try {
      // BODY DA REQUISIÇÃO
      let data = {
        "filter": {
          "_id": {
            "$oid": bookID
          }
        },
        "sort": {
          "_id": -1
        },
        "limit": 1
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
    infoBook().then((listLivros) => {
    })
  }, []);

  // CODIGO
  return (
    <div className="container-homeBook">

      {books.map((book) => (

        <div className="homeBook">

          <div key={book._id} className="div_infor">
            <img src={book.capa} alt="erro" srcset="" />

            <div className="div_conteudo">
              <p>{book.titulo}</p>
              <p> Numero de paginas:{book.paginas}</p>
              <p>Autor:{book.autor}</p>
              <p>Data de lançamento:{book.data_lancamento}</p>
              <p>Idioma: {book.idioma}</p>
            </div>
          </div >

          <div className="div_descricao">
            <p>
              <h2>Sinopse:</h2>{book.sinopse}
            </p>
            <br />
            <p>
              categorias: {book.categorias}
            </p>
          </div>

          <div>
            <button className="button_pedido_home">Fazer pedido</button>
          </div>

        </div>

      ))}

    </div>

  )
}
