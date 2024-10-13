/*
  CRIADO POR: GUILHERME HENRIQUE PORTO DOS SANTOS
  EMAIL: guilhermeportosantos1@gmail.com
*/

////////////////////////////////////////////////////
// ROTA PARA A PAGINA MAIN DO CADASTRO DE USUARIO //
////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import listarUsuario from '../../../controllers/listUser';
import '../styles/usersPage.css';
import Loader from '../../../commun_Components/Loader/Loader';
import swal from 'sweetalert'

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listarUsuario();
        setUsers(res.data_base.result); // DEFINE O VALOR RECEBIDO NA LISTA DE USER
      } catch (error) {
        
        setUsers([]); // DEFINE UM ARRAY VAZIO PARA EVITAR ERRO
        console.error('Error fetching users:', error);
        swal("Erro", error.mensagem, "error"); // IMPRIME O ERRO NA TELA
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) => user.nome.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || (user.cargo === 0 ? 'Admin' : 'Colaborador').toLowerCase().includes(
    searchTerm.toLowerCase())

  );

  return (
    <div className="containerUsersMain">
      <div className="inputsUsersContainer">
        <div className="SearchUserContainer">
          <input
            type="text"
            placeholder="Buscar por Nome Cargo ou Email..."
            className="inputSearchUser"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="buttonSearchUser">
            <i className="bx bx-search"></i>
          </button>
        </div>
        <Link to="newUser" className="LinkCreateUser">
          <button>Novo</button>
        </Link>
      </div>

      <div className="usersContainer">
        <div className="headTableUsers">
          <span>Nome:</span>
          <span className="emailSpan">E-mail:</span>
          <span className="cargoSpan">Cargo:</span>
          <span className="editarSpan">Editar:</span>
        </div>

        {loading ? (
          <Loader /> // exibe o loader enquanto requisita a API
        ) : (
          <div className="userTable">
            {filteredUsers.length >= 0 ? (
              filteredUsers.map((user) => (
                <div className="user" key={user._id}>
                  <p>{user.nome}</p>
                  <p className="userEmail">{user.email}</p>
                  <p className="userCargo">{user.cargo === 0 ? 'Admin' : 'Colaborador'}</p>
                  <Link to={`editUser/${user._id}`} className="editUserLink">
                    <img src="edit-user-icon.png" alt="edit-user-icon" />
                  </Link>
                </div>
              ))
            ) : (
              <div>Nenhum Usuário Cadastrado...</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
