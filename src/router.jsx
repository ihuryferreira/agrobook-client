/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

/*
  EDITADO: JEAN CLEIDSON PEREIRA RODRIGUES
  MATRICULA: 202202257141
  EMAIL: jeantng2016@gmail.com  
*/

import { createBrowserRouter, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "./controllers/isAuthenticated";

//paginas
import UsersLayout from "./views/Cadastro_Usuarios/UsersLayout";
import UsersPage from "./views/Cadastro_Usuarios/Components/UsersPage";
import LoginLayout from "./views/Tela_Login/LoginLayout";
import Login from "./views/Tela_Login/Components/Tela_Login";
import Validar from "./views/Tela_Login/Components/validar";
import Home from "./views/Home/components/Home";
import HomeBook from "./views/Home/components/HomeBook";
import CreateUser from "./views/Cadastro_Usuarios/Components/CreateUser";
import EditUser from "./views/Cadastro_Usuarios/Components/EditUser";
import HomeLayout from "./views/Home/HomeLayout";
import EstoqueLayout from "./views/Estoque/EstoqueLayout";
import Formulario from "./views/Estoque/Components/Formulario";
import EstoquePage from "./views/Estoque/Components/EstoquePage";
import PedidosLayout from "./views/Pedidos/PedidosLayout";
import PagePedido from "./views/Pedidos/components/PagePedido";
import EstoqueEdit from "./views/Estoque/Components/EditEstoque";
import FilterBooK from "./views/Home/components/filterBook";
import PedidoID from "./views/Pedidos/components/PedidosID";


const PrivateRoute = ({ element, children }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticatedUser = await isAuthenticated(); // Função que verifica a autenticação
      setAuthenticated(isAuthenticatedUser);

      if (!isAuthenticatedUser) {
        // Redireciona para a tela de login se não estiver autenticado
        navigate("/");
      }
    };

    checkAuthentication();
  }, [navigate]);

  return authenticated ? (element || children) : null;
};


// ROTAS DA PAGINA WEB
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            { index: true, element: <Login /> },
            { path: "validar", element: <Validar ok={undefined} /> }
        ]
    },
    {
        path: "/home",
        element: <PrivateRoute> <HomeLayout /> </PrivateRoute> ,
        children: [
            { index: true, element: <Home /> },
            { path: "book/:bookID", element: <HomeBook /> },
            {path:"filter",element:<FilterBooK/>}

        ]
    },
    {
        path: "/user",
        element: <PrivateRoute><UsersLayout /></PrivateRoute>, //Layout Pagina Users
        children: [
            { index: true, element: <UsersPage /> },//Rota main de Users
            { path: "newUser", element: <CreateUser /> }, // Rota create User
            { path: "editUser/:userID", element: <EditUser /> } // Rota Edit User
        ]
    },
    {
        path: "/storage",
        element: <PrivateRoute><EstoqueLayout /></PrivateRoute>,
        children: [
            { index: true, element: <EstoquePage /> },// Rota para ver estoque
            { path: "formEstoque", element: <Formulario /> },// rota para adcionar no estoque
            { path: "estoque/:bookID", element: <EstoqueEdit /> }
        ]
    },
    {
        path: "/orders",
        element: <PrivateRoute><PedidosLayout /></PrivateRoute>,
        children: [
            { index: true, element: <PagePedido /> },
            {path:"pedido/:pedidoID",element: <PedidoID/>}
        ]
    }
]);

export default router