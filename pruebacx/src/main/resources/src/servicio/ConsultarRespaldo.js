import axios from "axios";

const API_URL = "http://localhost:8080";
const CONTROLADOR1 = "/file/download/respuesta.json";
const CONTROLADOR2 = "/file/upload";

class ConsultarRespaldoServicio {
    Consultar() {
        return axios.get(API_URL + CONTROLADOR1);

    }
    Actualizar(info) {
        return axios.post(API_URL + CONTROLADOR2, info
            );
    }

}

export default new ConsultarRespaldoServicio();
