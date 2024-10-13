import { useState } from "react";
import { Link } from "react-router-dom";
import updateUser from "../../../controllers/updateUser";
import React from "react";
import "../styles/validar.css"
import logo from "../../../assets/logo.png"


export default function Validar({ ok, fechar }) {
  let [newSenha, setnewSenha] = useState("");
  let [salvandoSenha, setsalvandoSenha] = useState([]);
  let [mensageApi, setmensageApi] = useState("");

  let createPassowrd = async (ev) => {
    const novasenha = newSenha;
    setsalvandoSenha = [...salvandoSenha, { adcionarnova: novasenha }];
    setnewSenha("");
    return listUsers;
  };

  //lista usuarios
  let listUsers = async (e) => {
    e.preventDefault();
 
    try {
      let data = {
        filter: {
          email: { $regex: "a", $options: "i" },
          resetar_senha: 1,
        },
        sort: {
          _id: -1,
        },
        limit: 10,
      };

      const resposta = await axios.post(
        "http://localhost:57601/api/user/list_user",
        data,
        {
          withCredentials: true,
        }
      );

      console.log(resposta);
    } catch (err) {
      console.log(err.response.status, err.response.data.mensagem);
    }
    const updatepass = updateUser(newSenha)
     updatepass()
  };

  if (ok=== false) {
    return (
      <div className="modal">
        <div className="modal_fundo" >
         <Link to={"/"}> <button className="fechar"><box-icon  name='left-arrow-alt' ></box-icon></button></Link>
          <img className="logo" src={logo} alt="" />
        <h2 className="titulo" >Redefine sua senha</h2>
        <p className="subtitulo">Insira sua nova senha</p>
        
          <input
          type="password"
          name="senha"
          id="senha"
          className="newsenha"
          maxLength="8"
          onChange={(ev) => setnewSenha(ev.target.value)}
       
        />
        
        
        <Link to={"/home"}>
          {" "}
          <button onClick={createPassowrd} className="button"> trocar de senha </button>
       
        </Link>
      </div>
      </div>
      
    );
  } else {
    
  }
}
//para listar nova senha precisa so da senha nova ou vcs colocaram algo mais? 
//Listar a senha que ta no BD não tem como, por segurança
//O que tem q fazer nessa tela é dar update na senha
//Ai tu precisa so do nome
//ja volto peri
//ok
