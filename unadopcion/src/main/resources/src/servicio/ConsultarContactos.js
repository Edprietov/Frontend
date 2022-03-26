import axios from "axios";

const API_URL = "http://localhost:8080";
const CONTROLADOR = "/consultar";

class ConsultarContactoServicio {
    ConsultarTodosContactos() {
        return axios.get(API_URL + CONTROLADOR);

    }
    ConsultarContactoporId(id) {
        return axios.get(API_URL + CONTROLADOR + "/"+ id);

    }
}

export default new ConsultarContactoServicio();
