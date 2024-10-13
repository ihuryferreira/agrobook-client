
/*
  CRIADO POR: Fillype da Silva Macedo Cunha
  EMAIL: fillypecunha@gmail.com
*/
import { useParams } from "react-router-dom"
import React, { useRef, useState, useEffect } from "react"
import "../style/editEstoque.css"
import axios from 'axios';
import { Link } from "react-router-dom"


export default function EstoqueEdit() {

  const { bookID } = useParams()
  const [sinopse, setSinopse] = useState("")
  const [conver, setConver] = useState("")
  const [titulo, setTitulo] = useState("")
  const [author, setAuthor] = useState("")
  const [idioma, setIdioma] = useState([""])
  const [pag, setPag] = useState()
  const [quantidade, setQuantidade] = useState()
  const [genero, setGenero] = useState([""])
  const [data_lancamento, setData_lancamento] = useState()

  // CRIA TAG COM GENEROS DE LIVROS
  const handleSelectChange = (event) => {
    const options = event.target.options;
    const selectedValues = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setGenero(selectedValues)
  }

  // PUXA DADOS DA API
  const listaLivros = async (e) => {
    try {
      // BODY DA REQUISIÇÃO
      let data = {
        "filter": {
          "_id": { "$oid": bookID }
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
      let livro = resposta.data.data_base.result[0]
      setTitulo(livro["titulo"]);
      setConver(livro["capa"]);
      setIdioma(livro["idioma"]);
      setPag(livro["paginas"]);
      setQuantidade(livro["total_estoque"]);
      setGenero(livro["categorias"]);
      setSinopse(livro["sinopse"]);
      setAuthor(livro["autor"]);
      setData_lancamento(livro["data_lancamento"]);
      
      setAuthor(livro["autor"]);
      setAuthor(livro["autor"]);
      console.log(resposta.data.data_base.result);
      return resposta.data.data_base.result

    } catch (err) {
      console.log(err);
    }
  }

  // EXECULTA APENAS UMA VEZ A SOLICITAÇÃO A API
  useEffect(() => {
    listaLivros().then((listLivros) => { })
  }, []);

  // CODIGO
  return (
    <form>

      <div className="container_edit_estoque">

        <div className="subcontainer_edit_estoque">
          {/* Parte superior  */}

          <div className="div_title_edit_estoque">
            <h2>
              Criar Livro
            </h2>
            <Link to={'/storage'}><i className='bx bx-x'></i></Link>
          </div>

          {/* first_inputs_estoque : titulo e Capa */}
          {/* titulo */}

          <div className="div_form">
            <div className="first_inputs_estoque">
              <label htmlFor="name">
                <p className="title_edit" > Titulo</p>
                <input type="text"
                  name="name"
                  id="name"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className="input_titulo_edit"
                />
                {/* Capa */}
              </label>
              <label htmlFor="conver"><p>Capa:</p>
                <input type="text"
                  name="conver"
                  id="conver"
                  value={conver}
                  onChange={(e) => setConver(e.target.value)}
                  className="input_capa_edit"
                />
              </label>
            </div>

            {/* seconds_inputs_edit: Autor, idioma e quantidade de pagina e Estoque  */}
            {/* Autor */}

            <div className="seconds_inputs_edit">
              <label htmlFor="autor"><p>Autor</p>
                <input type="text"
                  name="autor"
                  id="autor"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="input_autor_edit"
                />
              </label>
              {/* Idioma */}

              <label htmlFor="idioma"><p>Idioma</p>
                <select name="idioma" id="idioma"
                  onChange={(e) => setIdioma(e.target.value)}
                  className="input_idioma_edit"
                >
                  <option value={idioma}>Portugues</option>
                  <option value={idioma}>Ingles</option>

                </select>
              </label>
              {/* Quantindade de paginas */}
              <label htmlFor="pag"><p>Quantidade de paginas</p>
                <input type="number"
                  name="pag"
                  id="pag"
                  value={pag}
                  onChange={(e) => setPag(e.target.value)}
                  className="input_qtd_edit"
                />
                {/* Estoque */}
              </label>
              <label htmlFor="qtdEstoque"><p> Em Estoque:</p>
                <input type="number"
                  name="qtdEstoque"
                  id="qtdEstoque"
                  value={quantidade}
                  className="input_estoque_edit"
                  onChange={(e) => setQuantidade(e.target.value)}
                />
              </label>
              {/* Categorias */}
              {/* third_inputs_edit: Categorias */}
            </div>

            <div className="third_inputs_edit">
              <label htmlFor="generos">
                <p>Categorias</p>
                <select name="generos" id="" multiple="multiple"
                  value={genero}
                  onChange={handleSelectChange}
                  className="input_select_edit"
                >

                  <option value={"acao"}>Açao</option>
                  <option value={"romance"}>Romance</option>
                  <option value={"comedia"}>Comedia</option>
                  <option value={"fiçao"}>Ficçao</option>
                </select>
              </label>

            </div>
            {/* room_inputs_edit: Sinopse e Data de Lançamento */}
            {/* Sinopse */}
            <div className="room_inputs_edit">
              <label>
                <p>Sinopse:</p>
                <input type="text"
                  name="sinopse"
                  id="sinop"
                  value={sinopse}
                  onChange={(e) => setSinopse(e.target.value)}
                  className="input_sinopse_edit"
                />
              </label>
              {/* Data de Lançamento */}
              <label htmlFor="lançamento">
                <p>Data de lançamento</p>
                <input type="date" name="lançamento" id=""
                  value={data_lancamento}
                  onChange={(e) => setData_lancamento(e.target.value)}
                  className="input_lacamento_edit"
                />
              </label>
            </div>


            <div className="div_button_edit">
              <button type='submit' className="button_edit_estoques_salvar">Salvar</button>
              <button type="submit" className="button_edit_estoques_excluir">Excluir</button>
            </div>
            <div>
              <h2>
                {/* {sinopse}
              {genero.join("/")}
              {quantidade}
              {pag}
              {data_lancamento} */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </form>


  )

}