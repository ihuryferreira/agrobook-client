/*
  CRIADO POR: Fillype da Silva Macedo Cunha
  EMAIL: fillypecunha@gmail.com
*/

import { useState } from "react"
import Proptypes, { func } from 'prop-types'
import Estoque_Book from "./BookEstoque"
import "../style/Formulario_Estoque.css"
import { Link } from "react-router-dom"

    Formulario.prototype ={
        addBook: Proptypes.func
    }
   
export default function Formulario({addBook}){
    const [ sinopse, setSinopse]= useState("")
    const [conver, setConver] = useState("")
    const [titulo, setTitulo]= useState("")
    const [author, setAuthor]= useState("")
    const[ idioma,setidioma]=useState([""])
    const[pag, setPag]=useState()
    const[quantidade,setQuantidade]=useState()
    const[genero, SetGenero]=useState([""])
    const[data_lancamento, setData_lancamento]=useState()
    function stopsubmit(ev) {
        ev.preventDefault()
        addBook({titulo,conver,sinopse,pag,quantidade,idioma,genero,author})
        setConver("")
        setTitulo("")
        setSinopse("")
        setAuthor("")
        setPag("")
        setidioma("")
        setQuantidade("")
        SetGenero("")

      }
      // funçao para pegar os valores do genero 
      const handleSelectChange = (event) => {
        const options = event.target.options;
        const selectedValues = [];
        
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedValues.push(options[i].value);
          }
        }
        SetGenero(selectedValues)
      }
    return(
        <div className="container_form_estoque">
          <div className="sub_container_form_estoque">

          <div className="div_title_edit_estoque">
              <h2>
                Criar Livro
              </h2>
              <Link to={'/storage'}><i className='bx bx-x'></i></Link>
            </div>

            <form className="div_form" onSubmit={stopsubmit}>
                   {/* first_inputs_estoque : titulo e Capa */}
                    {/* titulo */}
            <div className="first_inputs_estoque">
              <label htmlFor="name">
              <p>Titulo:</p>
              <input type="text"
              name="name"
              id="name"
              value={titulo}
              onChange={(e)=> setTitulo(e.target.value)}
              className="input_titulo_edit"
              /> 
                    {/* Capa */}
                    </label>
                    <label htmlFor="conver"><p>Capa:</p>
                     <input type="text"
                     name="conver"
                     id="conver"
                     value={conver}
                     onChange={(e)=> setConver(e.target.value) }
                     className="input_capa_edit"
                     />
                     </label>
            </div>
{/* seconds_inputs_edit: Autor, idioma e quantidade de pagina e Estoque  */}
                {/* Autor */}

             <div className="seconds_inputs_edit">
                     <label htmlFor="autor"><p>Autor:</p>
                           <input type="text"
                           name="autor"
                           id="autor"
                           value={author}
                           onChange={(e)=>setAuthor(e.target.value)}
                           className="input_autor_edit"
                           />
                     </label>
                        {/* Idioma */}
                     <label htmlFor="idioma"><p>Idioma:</p>
                           <select name="idioma" id="idioma" 
                           onChange={(e)=>setidioma(e.target.value)}
                           className="input_idioma_edit"
                           >
                            <option value={idioma}>Portugues</option>
                            <option value={idioma}>Ingles</option>
                           </select>
                     </label>
                     {/* Quantidade de paginas */}
                     <label htmlFor="pag"><p>Quantidade de paginas:</p>
                           <input type="number"
                           name="pag"
                           id="pag"
                           value={pag}
                           onChange={(e)=>setPag(e.target.value)}
                           className="input_qtd_edit"
               />
                     </label>
                            {/* Quantidade em estoque */}
                     <label htmlFor="qtdEstoque"><p> Em Estoque:</p>
                           <input type="number"
                           name="qtdEstoque"
                           id="qtdEstoque"
                           value={quantidade}
                           onChange={(e)=> setQuantidade(e.target.value)}
                           className="input_estoque_edit"
                           />
                     </label>
             </div>
             
             <div className="third_inputs_edit">
               <label htmlFor="generos">
                <p>Categorias:</p>
                 <select name="generos" id="" multiple="multiple"
                       style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                       value={genero}
                       onChange={handleSelectChange}
                       className="input_select_edit"
                       >
                       <option value={"acao"}>Açao</option>
                             <option value={"romance"}>Romance</option>
                             <option value={"comedia"}>comedia</option>
                             <option value={"fiçao"}>ficçao</option>

                  </select>
               </label>
             </div>
                     {/* room_inputs_edit: Sinopse e Data de Lançamento */}
                        {/* Sinopse */}
             <div className="room_inputs_edit">
               <label>
                           <p>sinopse</p>
                           <input type="text"
                           name="sinopse"
                           id="sinop"
                           value={sinopse}
                           onChange={(e)=> setSinopse(e.target.value)}
                           className="input_sinopse_edit"
                           />
                           </label>
                              {/* Data de Lançamento */}
                           <label htmlFor="lançamento">
                           <p>data de lançamento</p>
                           <input type="date" name="lançamento" id=""
                           value={data_lancamento}
                           onChange={(e)=> setData_lancamento(e.target.value)}
                           className="input_lacamento_edit"
                           />
                           </label>
             </div>
               
                    
                 <div className="div_button_edit"><button className="button_edit_estoques_salvar" type='submit'>Salvar</button></div>
             <div>
                 
                  <h2>
                    {sinopse}
                    {genero.join("/")}
                    {quantidade}
                    {pag}
                    {data_lancamento}
              
                  </h2>
                 </div>
                 </form>
          </div>
    </div>
    
    )

    
}