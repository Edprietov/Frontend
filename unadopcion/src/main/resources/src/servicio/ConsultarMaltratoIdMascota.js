
import axios from "axios";

const UNADOPCION_API_URL = "http://localhost:8080";
const CONTROLADOR = "/consultar-maltrato/";

class ConsultarMaltratoIdMascota{
    ConsultarPorId(id){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + id);//enviar como variable en URL
    }
}

export default new ConsultarMaltratoIdMascota();