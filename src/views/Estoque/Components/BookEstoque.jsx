/*
  CRIADO POR: Fillype da Silva Macedo Cunha
  EMAIL: fillypecunha@gmail.com
*/

import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

Estoque_Book.prototype = {
  titulo: Proptypes.string,
  conver: Proptypes.string,
  sinopse: Proptypes.string,
  onremove: Proptypes.func,
  book: Proptypes.string
}

export default function Estoque_Book({ titulo, conver, sinopse, onremove, book }) {
  return (

    <div>
      <h2>{titulo}</h2>
      <img src={conver} alt={""} srcSet={conver} />
      <p> {sinopse}</p>
      <button onClick={onremove}>REMOVER</button>
      <Link to={`estoque`} ><button>editar</button></Link>
    </div>

  )

}