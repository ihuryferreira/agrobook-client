/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

import React, { useState } from "react";
import InputMask from 'react-input-mask';


export default function EditUserForm({ status, user, setModalError, setModalAlert, setModalSucess, setMessage}) {
  //Inputs do form
  const [nome, setNome] = useState(user.nome)//Manipula o valor do input NOme
  const [cpf, setCpf] = useState(user.documento) // Manipula o valor do input CPF
  const [email,setEmail] = useState(user.email)//Manipula o valor do input Email
  const [senha, setSenha] = useState('') // Manipula o valor do input Senha
  const [cargoSelect, setCargoSelect] = useState(user.cargo) //Manipula cargo selecionado


  const handlerEditSave = (e)=>{
    e.preventDefault()

    setMessage('Usuário Criado com sucesso!')
    setModalSucess(true)
  }

  if (status == 1) {
    //valida se o usuário foi passado na prop
    if (!user) {
      console.error("Usuário não passado para o form");
    }
    return (
      <form className="editUserMain">
        <div className="firstcontainerinput">
          <div className="inputName createFormInputs">
            <label htmlFor="nome">
              Nome: <b>*</b>
            </label>
            <input type="text" name='nome' id='nome' required value={nome} onChange={(e)=> setNome(e.target.value)}/>
          </div>
          <div className="inputCpf createFormInputs">
            <label htmlFor="cpf">
              Cpf: <b>*</b>
            </label>
            <InputMask
                mask="999.999.999-99"
                maskChar={null}
                type="text"
                name='cpf'
                id='cpf'
                value={cpf}
                onChange={(e)=>setCpf(e.target.value)}
                minLength={12}
                disabled
              />
          </div>
        </div>

        <div className="secondcontainerinput">
          <div className="inputEmail createFormInputs">
            <label htmlFor="email">
              E-mail: <b>*</b>
            </label>
            <input type="email" name='email' id='email' required value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="inputPassword createFormInputs">
            <label htmlFor="senha">
              Senha: <b>*</b>
            </label>
            <input type="password" name='senha' id='senha' required value={senha} onChange={(e) => setSenha(e.target.value)} minLength={8}/>
          </div>
          <div className="containerCargo">
          <label htmlFor="cargo">Cargo: <b>*</b></label>
          <select value={cargoSelect} onChange={(e) => setCargoSelect(e.target.value)}>
              <option value={0}>ADMINISTRADOR</option>
              <option value={1}>COLABORADOR</option>
            </select>
          </div>
        </div>

        <div className="logEditUserContainer">
          <p>
            Usuário Criado por GUILHERME HENRIQUE PORTO DOS SANTOS em 01/01/2023
            há 3 meses atrás
          </p>
        </div>

        <div className="thirdcontainerinputedit">
          <span className="desabilitUserButton" >Desabilitar</span>
          <button className="saveButton" onClick={handlerEditSave}>Salvar</button>
        </div>
      </form>
    );
  } else {
    return (
      <form className="editUserMain">
        <div className="firstcontainerinput">
          <div className="inputName createFormInputs">
            <label htmlFor="nome">
              Nome: <b>*</b>
            </label>
            <input type="text" name='nome' id='nome' disabled value={nome} onChange={(e)=> setNome(e.target.value)}/>
          </div>
          <div className="inputCpf createFormInputs">
            <label htmlFor="cpf">
              Cpf: <b>*</b>
            </label>
            <InputMask
                mask="999.999.999-99"
                maskChar={null}
                type="text"
                name='cpf'
                id='cpf'
                value={cpf}
                onChange={(e)=>setCpf(e.target.value)}
                minLength={12}
                disabled
              />
          </div>
        </div>

        <div className="secondcontainerinput">
          <div className="inputEmail createFormInputs">
            <label htmlFor="email">
              E-mail: <b>*</b>
            </label>
            <input type="email" name='email' id='email' disabled value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="inputPassword createFormInputs">
            <label htmlFor="senha">
              Senha: <b>*</b>
            </label>
            <input type="password" name='senha' id='senha' disabled value={senha} onChange={(e) => setSenha(e.target.value)} minLength={8}/>
          </div>
          <div className="containerCargo">
          <label htmlFor="cargo">Cargo: <b>*</b></label>
          <select value={cargoSelect} onChange={(e) => setCargoSelect(e.target.value)} disabled>
              <option value={0}>ADMINISTRADOR</option>
              <option value={1}>COLABORADOR</option>
            </select>
          </div>
        </div>

        <div className="logEditUserContainer">
          <p>
            Usuário Criado por GUILHERME HENRIQUE PORTO DOS SANTOS em 01/01/2023
            há 3 meses atrás
          </p>
        </div>

        <div className="thirdcontainerinputedit">
          <span className="habiliteUserButton" onClick={()=> setModalAlert(true)}>Habilitar</span>
        </div>
      </form>
      
    );
  }
}
