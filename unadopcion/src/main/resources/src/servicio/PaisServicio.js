import axios from "axios";

const API_URL = "http://localhost:8080";
const CONTROLADOR = "/paises";

class ConsultarPaisesServicio {
    ConsultarPaises() {
        return axios.get(API_URL + CONTROLADOR);
    }

}

export default new ConsultarPaisesServicio();
