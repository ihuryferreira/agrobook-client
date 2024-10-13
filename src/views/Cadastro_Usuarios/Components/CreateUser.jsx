/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

/////////////////////////////////////////////
// ROTA PARA A PAGINA DE CRIAÇÃO DE USUARIO //
/////////////////////////////////////////////




import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask';
import '../styles/createUser.css'
import CorrectModal from '../../../commun_Components/correctModal/CorrectModal'
import ErrorModal from '../../../commun_Components/error/ErrorModal'



export default function CreateUser() {
  const [openModalSucess, setOpenModalSucess] = useState(false) // Manipula abertura modal de sucesso
  const [openModalError, setOpenModalError] = useState(false) // Manipula abertura modal de error

  //Inputs do form
  const [nome, setNome] = useState('')//Manipula o valor do input NOme
  const [cpf, setCpf] = useState('') // Manipula o valor do input CPF
  const [email,setEmail] = useState('')//Manipula o valor do input Email
  const [senha, setSenha] = useState('') // Manipula o valor do input Senha
  const [cargoSelect, setCargoSelect] = useState() //Manipula cargo selecionado

  const handleSave = (e)=> {
    e.preventDefault()
    const data = {
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha,
      cargoSelect: cargoSelect
    }
    console.log(data)
    setOpenModalSucess(true)
  }

  return (
    <div className='createUserMasterComponent'>
      <div className='createUserComponent'>
        {/* Parte de cima do componente */}
        <div className="createUserHeader">
          <h2>Criar Usuário</h2>
          <Link to={'/user'}><i className='bx bx-x'></i></Link>
        </div>

        <form className="createUserMain">
          <div className='firstcontainerinput'>
            <div className='inputName createFormInputs'>
              <label htmlFor="nome">Nome: <b>*</b></label>
              <input type="text" name='nome' id='nome' required value={nome} onChange={(e)=> setNome(e.target.value)}/>
            </div>
            <div className='inputCpf createFormInputs'>
              <label htmlFor="cpf">Cpf: <b>*</b></label>
              <InputMask
                mask="999.999.999-99"
                maskChar={null}
                type="text"
                name='cpf'
                id='cpf'
                value={cpf}
                onChange={(e)=>setCpf(e.target.value)}
                minLength={12}
                required
              />
            </div>

          </div>

          <div className='secondcontainerinput'>
            <div className='inputEmail createFormInputs'>
              <label htmlFor="email">E-mail: <b>*</b></label>
              <input type="email" name='email' id='email' required value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className='inputPassword createFormInputs'>
              <label htmlFor="senha">Senha: <b>*</b></label>
              <input type="password" name='senha' id='createsenha' required value={senha} onChange={(e) => setSenha(e.target.value)} minLength={8}/>
            </div>
            <div className='containerCargo'>
              <label htmlFor="cargo">Cargo: <b>*</b></label>
              <select value={cargoSelect} onChange={(e) => setCargoSelect(e.target.value)}>
                <option value={0}>ADMINISTRADOR</option>
                <option value={1}>COLABORADOR</option>
              </select>
            </div>
          </div>
          <div className='thirdcontainerinput'><button className='saveButton' onClick={handleSave}>Salvar</button></div>
        </form>
      </div>

      
      <CorrectModal isOpen={openModalSucess} page={'/user'} message={'ola'}></CorrectModal>
      <ErrorModal isOpen={openModalError} setIsOpen={setOpenModalError} message={'ola'}></ErrorModal>
    </div>
  )
}
