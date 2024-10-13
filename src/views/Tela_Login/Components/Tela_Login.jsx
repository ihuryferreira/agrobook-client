/*
  CRIADO POR: Fillype da Silva Macedo Cunha
  EMAIL: fillypecunha@gmail.com
*/

/////////////////////////////////
// ROTA PARA A PAGINA DE LOGIN //
/////////////////////////////////

import { useState, useEffect } from "react";
import style from "../styles/telaLogin.module.css";
import React from "react";
import Login from "../../../controllers/Login";
import { Link, Navigate, redirect } from "react-router-dom";
import Validar from "./validar";
import loginLogo from "../../../assets/logo.png";
import Home from "../../Home/components/Home";

export default function Tela_Login() {
  let [email, setEmail] = useState("");
  let [senha, setSenha] = useState("");
  let [status, setStatus] = useState();
  let [mensgaemRetornada, setmensgaemRetornada] = useState();
  let [trocar, setTrocar] = useState(true);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const res = Login(email, senha);
    res

      .then((res) => {
        setmensgaemRetornada(res);
        setStatus(res);
      })
      .catch((err) => {
        // setmensgaemRetornada("err");
        console.log(setTrocar(err.response.status));
        //console.log(err);
        console.log(err);
      });
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit} className={style.loginContainer}>
        <img className={style.loginlogo} src={loginLogo} alt="" />
        <div className={style.inputbox}>
          <label  htmlFor="" className={style.label}>
            <input
            placeholder="E-mail"
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </label>
        </div>
        <div className={style.inputbox}>
          <label htmlFor="senha" className={style.label}>
            <input
            className="logSenha"
            placeholder="Senha"
              type="password"
              name="senha"
              id="senha"
              minLength="8"
              maxLength="100"
              // pattern="[A-Z a-z]+"
              value={senha}
              required
              onChange={(ev) => setSenha(ev.target.value)}
            />
          </label>
        </div>
        <div className="logBtPlace"><button type="subimt" className={style.logbutton}>Login</button>
        </div>

        <div>
          {status === 200 || 0 || "200" ? mensgaemRetornada : mensgaemRetornada}
        </div>

        {status === 200 ? <Navigate to="/home" /> : null}
      </form>
    </div>
    <Validar ok={true} />
    </>
  );
}
