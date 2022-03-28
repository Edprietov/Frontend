import axios from "axios";
import URL from "@/servicio/Url";

const CONTROLADOR = "/consultar";

class ConsultarContactoServicio {
    ConsultarTodosContactos() {
        console.log("Otra: " + URL.getUrl());
        return axios.get(URL.getUrl() + CONTROLADOR);

    }
    ConsultarContactoporId(id) {
        return axios.get(URL.getUrl() + CONTROLADOR + "/"+ id);

    }
}

export default new ConsultarContactoServicio();
