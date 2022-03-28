import axios from "axios";
import URL from "@/servicio/Url";

const CONTROLADOR1 = "/file/download/respuesta.json";
const CONTROLADOR2 = "/file/upload";

class ConsultarRespaldoServicio {
    Consultar() {
        return axios.get(URL.getUrl() + CONTROLADOR1);

    }
    Actualizar(info) {
        return axios.post(URL.getUrl() + CONTROLADOR2, info
            );
    }

}

export default new ConsultarRespaldoServicio();
