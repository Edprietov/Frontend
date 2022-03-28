import axios from "axios";
import URL from "@/servicio/Url";

const CONTROLADOR = "/paises";

class ConsultarPaisesServicio {
    ConsultarPaises() {
        return axios.get(URL.getUrl() + CONTROLADOR);
    }

}

export default new ConsultarPaisesServicio();
