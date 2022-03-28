import axios from "axios";
import URL from "@/servicio/Url";

const CONTROLADOR = "/eliminar";

class EliminarContactoServicio {
    EliminarContactoporId(id) {
        return axios.delete(URL.getUrl() + CONTROLADOR + "/"+ id);

    }
}

export default new EliminarContactoServicio();
