import { useState } from "react"
import InputMask from "react-input-mask";
import "../components/style/pedidosStyle.css"

export default function PedidoID(){

     const user = {
          _id: "65047a74babdd7046c86e390",
          nome: "FELIPE",
          documento: 70657247197,
          email: "fillypecunha@gmail.com",
          senha: "9794d28317313a72eb0fd5e91bc63092",
          cargo: 1,
          status: 1,
          data_aluguel: "2023-11-20T01:46:45.446Z",
          data_vencimento: "2023-11-14T01:27:06.817Z",
        };
        const getStatusString = (status) => {
          switch (status) {
            case 0:
              return "Aguardando Aprovação";
            case 1:
              return "Aprovado";
            case 2:
              return "Reprovado";
            // Adicione mais casos conforme necessário
            default:
              return "Desconhecido";
          }
        };

        const getCargoString = (status) => {
          switch (status) {
            case 0:
              return "Usuario";
            case 1:
              return "Administrador";
            
          }
        };
     const [ nome, setNome]= useState("")
     const [cpf, setCpf] = useState("")
     const [titulo, setTitulo]= useState("")
     const [cargo, setCargo]= useState("")
     const [status, setStatus]= useState("")
     const [data_pedido, setDataPedido]= useState("")
     const [data_vencimento, setData_vencimento]= useState("")
     const [estoque, setEstoque]= useState("")
     const [logs, setLogs]= useState("")

     return(
          <form className="container_pedidoId">
               <div className="subcontainer_pedidoId" >
                    <div className="title_pedido">
                         <h3>Solitação de Pedido</h3>
                    </div>
                    <div className="inputs_superior" >
                         <label>
                              <p>Nome do colaborador:</p>
                              <input type="text" name="name_colaborador" 
                              value={user.nome}
                              onChange={(e)=> setNome(e.target.value)}
                              className="inputs_superiores_pedidos"
                              />
                         </label>
                         <label > 
                              <p>Cpf</p>
                              <InputMask
                              minLength={12}
                            type="number" 
                           value={user.documento}
                           required
                           onChange={(e)=> setCpf(e.target.value)}
                           className="inputs_superiores_pedidos"
                           />
                         </label>
                         <label >
                          <p>
                              Cargo
                          </p>
                         <input type="text" value={ getCargoString(user.cargo)}  
                          onChange={(e)=> setCargo(e.target.value)}
                          className="inputs_superiores_pedidos"
                         />
                         </label>
                         <label >
                              <p>Status</p>
                              <input type="text" value={ getStatusString(user.status) }
                               onChange={(e)=> setStatus(e.target.value)}
                               className="inputs_superiores_pedidos"
                              />
                         </label>
               
                    </div>
               
                    <div className="inputs_inferior">
                         <label htmlFor="">
                              <p>titulo:</p>
                               <input type="text" 
                                onChange={(e)=> setTitulo(e.target.value)}
                                className="inputs_superiores_pedidos"
                               />
                         </label>
                        <label>
                         <p>Em estoque:</p>
                         <input type="number"
                          onChange={(e)=> setEstoque(e.target.value)}
                          className="input_EstoquepedidoId"
                         />
                        </label>
                         <label>
                              
                              <p>Data do pedido:</p>
                            <input type="date"
                             onChange={(e)=> setDataPedido(e.target.value)}
                             className="input_data_pedido_pedidoId"
                            />  
                         </label>
                         <label htmlFor="">
                         <p>Data do Vencimento:</p>
                         <input type="date"
                          onChange={(e)=> setData_vencimento(e.target.value)}
                          className="input_data_pedido_pedidoId"
                         />
                         </label>
                             
                    </div>
                    <div className="text_area" >
                         <label htmlFor="">
                         <p>Logs do Processo</p>
                         <textarea name="" id="" cols="150" rows="10"
                          onChange={(e)=> setLogs(e.target.value)}
                          className="text_area_pedidoId"
                         >
                         </textarea>
                         </label>
                    </div>
                    <div className="div_buttons_pedidoid">

                         <button className="buttos_pedidoId_aprovar" >Recusar</button>
                         <button className="buttos_pedidoId_reprovar">Aprovar</button>
                    </div>
               </div>
          </form>
     )
}