// IMPORTA MODULO DO AXIOS
import axios from 'axios';
import ErrorModal from '../commun_Components/error/ErrorModal';
import swal from 'sweetalert';

// DEFINE AS VARIAVIES DE AMBIENTE
var portApi = 57601;

// DEFINE A URL DA API BASEANDO NA URL ATUAL EX: [ localhost || 10.0.0.0 ]
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${portApi}`

export default async function Login(email, senha) {

  // CRIA OS DADOS DO BODY
  let body = {
    email: email,
    senha: senha,
  };

  // CRIA OS PARAMETROS DA REQUISIÇÃO
  let config = {
    method: 'POST',
    withCredentials: true, // ENVIA OS COOKIES
    url: '/auth/singin',
    headers: {
      'Accept': '*/*'
    },
    data: body
  };

  // INICIALIA O AXIOS
  const singIn = await axios.request(config)

    // TRATATIVA DE SUCESSO
    .then((response) => {

      // RESERVA TODAS AS INFORMAÇÃO DE ERRO RECEBIDA DO SERVIDOR
      let status = response.status;
      let dataSuccess = response.data;
      let codigo = response.data.codigo;
      let resposta = response.data.resposta;
      let mensagem = response.data.mensagem;

      sessionStorage.setItem('dataUser', JSON.stringify(response.data.hash)); // SALVA OS DADOS DO LOGIN NA SESSAO DO NAVEGADOR

      window.location.href = '/home'; // DIRECIONA PARA A TELA DE HOME
     
    })

    // TRATIVA DE ERRO
    .catch((error) => {

      // RESERVA TODAS AS INFORMAÇÃO DE ERRO RECEBIDA DO SERVIDOR
      let status = error.response.status;
      let dataErr = error.response.data;
      let codigo = dataErr.codigo;
      let resposta = dataErr.resposta;
      let mensagem = dataErr.mensagem;

      // APRESENTA MENSAGEM DE ERRO
      swal("Erro", mensagem, "error")
    });

}
