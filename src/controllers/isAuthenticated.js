/*
CRIADO: JEAN CLEIDSON PEREIRA RODRIGUES
MATRICULA: 202202257141
EMAIL: jeantng2016@gmail.com  
*/

// IMPORTA MODULO DO AXIOS
import axios from 'axios';

// DEFINE AS VARIAVIES DE AMBIENTE
var portApi = 57601;

// DEFINE A URL DA API BASEANDO NA URL ATUAL EX: [ localhost || 10.0.0.0 ]
axios.defaults.baseURL = `${window.location.protocol}//${window.location.hostname}:${portApi}`;

export const isAuthenticated = async () => {

    // CRIA OS PARAMETROS DA REQUISIÇÃO
    let config = {
        method: 'POST',
        withCredentials: true, // ENVIA OS COOKIES
        url: '/auth/singin/valid',
        headers: {
            'Accept': '*/*'
        }
    };

    // INICIALIA O AXIOS
    const ResAuth = await axios.request(config)

    // TRATATIVA DE SUCESSO
    .then((response) => {
        
        // RESERVA TODAS AS INFORMAÇÃO DE ERRO RECEBIDA DO SERVIDOR
        let status = response.status;
        let dataSuccess = response.data;
        let codigo = response.data.codigo;
        let resposta = response.data.resposta;
        let mensagem = response.data.mensagem;

        return true;
        
    })

    // TRATIVA DE ERRO
    .catch((error) => {

        // RESERVA TODAS AS INFORMAÇÃO DE ERRO RECEBIDA DO SERVIDOR
        let status = error.response.status;
        let dataErr = error.response.data;
        let codigo = dataErr.codigo;
        let resposta = dataErr.resposta;
        let mensagem = dataErr.mensagem;

        return false;

    });

    console.log(ResAuth);

    // RERIFICA A RESPOSTA DA VALIDAÇÃO DA SESSÃO
    if (ResAuth) {
        return true; // LOGIN AUTENTICO
    } else {
        return false; // LOGIN NÃO-AUTENTICO
    }

}