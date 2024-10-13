/*
  CRIADO POR: Fillype da Silva Macedo Cunha
  EMAIL: fillypecunha@gmail.com
*/

/////////////////////
// ROTA PARA A HOME //
/////////////////////


import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import "../style/home.css";

export default function Home() {
  const slider = useRef(null)
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
  let [bookAcao, setBookAcao] = useState([{
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
  }]);
  let [bookComedia, setBookComedia] = useState([{
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
  }]);
  let [bookRomance, setBookRomance] = useState([{
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
  }]);
  let [bookDrama, setBookDrama] = useState([{
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
  }]);
  let [bookFilosofia, setBookFilosofia] = useState([{
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
  }]);
  let [bookEconomia, setBookEconomia] = useState([{
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
  }]);

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

  // REALIZA O FILTRO DOS LIVROS USANDO UM OBJETO [ categorias ]
  const filtroLivros = async (books) => {
    let listAcao = books.filter((book) => book.categorias.indexOf("ação") > -1)
    let listComedia = books.filter((book) => book.categorias.indexOf("comedia") > -1)
    let listRomance = books.filter((book) => book.categorias.indexOf("romance") > -1)
    let listDrama = books.filter((book) => book.categorias.indexOf("drama") > -1)
    let listFilosofia = books.filter((book) => book.categorias.indexOf("filosofia") > -1)
    let listEconomia = books.filter((book) => book.categorias.indexOf("economia") > -1)
    setBookAcao(listAcao)
    setBookComedia(listComedia)
    setBookRomance(listRomance)
    setBookDrama(listDrama)
    setBookFilosofia(listFilosofia)
    setBookEconomia(listEconomia)
  }

  // EXECULTA APENAS UMA VEZ A SOLICITAÇÃO A API
  useEffect(() => {
    listaLivros().then((listLivros) => {
      filtroLivros(listLivros)
    })
  }, []);

  // MOVE PARA A ESQUERDA
  const goleft = (e) => {
    e.preventDefault()
    slider.current.scrollLeft -= slider.current.offsetWidth
  }
  // MOVE PARA A DIREITA
  const goRight = (e) => {
    e.preventDefault()
    slider.current.scrollLeft += slider.current.offsetWidth
  }

  // CODIGO
  return (
    /* div booksContainer pai que contem todos elementos */

    <div className="booksContainer">

      {/* div que controla formato movimento de cada card */}

      <div className="slider-home" >

        <h2 className="title-genero">Ação</h2>
        <div className="teste">

          {/* BOTAO DA ESQUERDA */}
          <div className="button-teste" >
            {
              bookAcao.length > 0 ?
                <button onClick={goleft} className="icon-left"><box-icon name='left-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

          {/* LISTA DE LIVROS SE EXISTIR */}
          <div className="book-slider" ref={slider}>

            {
              bookAcao.length > 0 ?
                bookAcao.map((book) => (
                  <div key={book._id} className="card-home" >

                    {/* div card-home vai ser que controla o tamanho da imagem  */}

                    <Link to={`book/${book._id}`}>
                      <img className="home-imagem" src={book.capa} alt="" />
                      <div className="div-title">
                        <p className="titulo-book">{book.titulo}</p>
                      </div>

                    </Link>

                  </div>
                )) :
                <div key="" className="card-home" >
                  <div>
                    <img className="home-imagem" src="https://static.vecteezy.com/system/resources/previews/018/733/803/large_2x/add-simple-flat-icon-illustration-free-vector.jpg" alt="Nenhum registro" />
                    <div className="div-title">
                      <p className="titulo-book">Nenhum registro</p>
                    </div>
                  </div>
                </div>
            }

          </div>

          {/* BOTAO DA DIREITA */}
          <div className="button-frente">
            {
              bookAcao.length > 0 ?
                <button onClick={goRight} className="icon-right" ><box-icon name='right-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

        </div>

        <h2 className="title-genero">Comedia</h2>
        <div className="teste">

          {/* BOTAO DA ESQUERDA */}
          <div className="button-teste" >
            {
              bookComedia.length > 0 ?
                <button onClick={goleft} className="icon-left"><box-icon name='left-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

          {/* LISTA DE LIVROS SE EXISTIR */}
          <div className="book-slider" ref={slider}>

            {
              bookComedia.length > 0 ?
                bookComedia.map((book) => (
                  <div key={book._id} className="card-home" >

                    {/* div card-home vai ser que controla o tamanho da imagem  */}

                    <Link to={`book/${book._id}`}>
                      <img className="home-imagem" src={book.capa} alt="" />
                      <div className="div-title">
                        <p className="titulo-book">{book.titulo}</p>
                      </div>

                    </Link>

                  </div>
                )) :
                <div key="" className="card-home" >
                  <div>
                    <img className="home-imagem" src="https://static.vecteezy.com/system/resources/previews/018/733/803/large_2x/add-simple-flat-icon-illustration-free-vector.jpg" alt="Nenhum registro" />
                    <div className="div-title">
                      <p className="titulo-book">Nenhum registro</p>
                    </div>
                  </div>
                </div>
            }

          </div>

          {/* BOTAO DA DIREITA */}
          <div className="button-frente">
            {
              bookComedia.length > 0 ?
                <button onClick={goRight} className="icon-right" ><box-icon name='right-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

        </div>

        <h2 className="title-genero">Drama</h2>
        <div className="teste">

          {/* BOTAO DA ESQUERDA */}
          <div className="button-teste" >
            {
              bookDrama.length > 0 ?
                <button onClick={goleft} className="icon-left"><box-icon name='left-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

          {/* LISTA DE LIVROS SE EXISTIR */}
          <div className="book-slider" ref={slider}>

            {
              bookDrama.length > 0 ?
                bookDrama.map((book) => (
                  <div key={book._id} className="card-home" >

                    {/* div card-home vai ser que controla o tamanho da imagem  */}

                    <Link to={`book/${book._id}`}>
                      <img className="home-imagem" src={book.capa} alt="" />
                      <div className="div-title">
                        <p className="titulo-book">{book.titulo}</p>
                      </div>

                    </Link>

                  </div>
                )) :
                <div key="" className="card-home" >
                  <div>
                    <img className="home-imagem" src="https://static.vecteezy.com/system/resources/previews/018/733/803/large_2x/add-simple-flat-icon-illustration-free-vector.jpg" alt="Nenhum registro" />
                    <div className="div-title">
                      <p className="titulo-book">Nenhum registro</p>
                    </div>
                  </div>
                </div>
            }

          </div>

          {/* BOTAO DA DIREITA */}
          <div className="button-frente">
            {
              bookDrama.length > 0 ?
                <button onClick={goRight} className="icon-right" ><box-icon name='right-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

        </div>

        <h2 className="title-genero">Romance</h2>
        <div className="teste">

          {/* BOTAO DA ESQUERDA */}
          <div className="button-teste" >
            {
              bookRomance.length > 0 ?
                <button onClick={goleft} className="icon-left"><box-icon name='left-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

          {/* LISTA DE LIVROS SE EXISTIR */}
          <div className="book-slider" ref={slider}>

            {
              bookRomance.length > 0 ?
                bookRomance.map((book) => (
                  <div key={book._id} className="card-home" >

                    {/* div card-home vai ser que controla o tamanho da imagem  */}

                    <Link to={`book/${book._id}`}>
                      <img className="home-imagem" src={book.capa} alt="" />
                      <div className="div-title">
                        <p className="titulo-book">{book.titulo}</p>
                      </div>

                    </Link>

                  </div>
                )) :
                <div key="" className="card-home" >
                  <div>
                    <img className="home-imagem" src="https://static.vecteezy.com/system/resources/previews/018/733/803/large_2x/add-simple-flat-icon-illustration-free-vector.jpg" alt="Nenhum registro" />
                    <div className="div-title">
                      <p className="titulo-book">Nenhum registro</p>
                    </div>
                  </div>
                </div>
            }

          </div>

          {/* BOTAO DA DIREITA */}
          <div className="button-frente">
            {
              bookRomance.length > 0 ?
                <button onClick={goRight} className="icon-right" ><box-icon name='right-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

        </div>

        <h2 className="title-genero">Filosofia</h2>
        <div className="teste">

          {/* BOTAO DA ESQUERDA */}
          <div className="button-teste" >
            {
              bookFilosofia.length > 0 ?
                <button onClick={goleft} className="icon-left"><box-icon name='left-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

          {/* LISTA DE LIVROS SE EXISTIR */}
          <div className="book-slider" ref={slider}>

            {
              bookFilosofia.length > 0 ?
                bookFilosofia.map((book) => (
                  <div key={book._id} className="card-home" >

                    {/* div card-home vai ser que controla o tamanho da imagem  */}

                    <Link to={`book/${book._id}`}>
                      <img className="home-imagem" src={book.capa} alt="" />
                      <div className="div-title">
                        <p className="titulo-book">{book.titulo}</p>
                      </div>

                    </Link>

                  </div>
                )) :
                <div key="" className="card-home" >
                  <div>
                    <img className="home-imagem" src="https://static.vecteezy.com/system/resources/previews/018/733/803/large_2x/add-simple-flat-icon-illustration-free-vector.jpg" alt="Nenhum registro" />
                    <div className="div-title">
                      <p className="titulo-book">Nenhum registro</p>
                    </div>
                  </div>
                </div>
            }

          </div>

          {/* BOTAO DA DIREITA */}
          <div className="button-frente">
            {
              bookFilosofia.length > 0 ?
                <button onClick={goRight} className="icon-right" ><box-icon name='right-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

        </div>

        <h2 className="title-genero">Economia</h2>
        <div className="teste">

          {/* BOTAO DA ESQUERDA */}
          <div className="button-teste" >
            {
              bookEconomia.length > 0 ?
                <button onClick={goleft} className="icon-left"><box-icon name='left-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

          {/* LISTA DE LIVROS SE EXISTIR */}
          <div className="book-slider" ref={slider}>

            {
              bookEconomia.length > 0 ?
              bookEconomia.map((book) => (
                  <div key={book._id} className="card-home" >

                    {/* div card-home vai ser que controla o tamanho da imagem  */}

                    <Link to={`book/${book._id}`}>
                      <img className="home-imagem" src={book.capa} alt="" />
                      <div className="div-title">
                        <p className="titulo-book">{book.titulo}</p>
                      </div>

                    </Link>

                  </div>
                )) :
                <div key="" className="card-home" >
                  <div>
                    <img className="home-imagem" src="https://static.vecteezy.com/system/resources/previews/018/733/803/large_2x/add-simple-flat-icon-illustration-free-vector.jpg" alt="Nenhum registro" />
                    <div className="div-title">
                      <p className="titulo-book">Nenhum registro</p>
                    </div>
                  </div>
                </div>
            }

          </div>

          {/* BOTAO DA DIREITA */}
          <div className="button-frente">
            {
              bookEconomia.length > 0 ?
                <button onClick={goRight} className="icon-right" ><box-icon name='right-arrow-alt' ></box-icon></button> :
                ""
            }
          </div>

        </div>

      </div>

    </div>

  )

}
