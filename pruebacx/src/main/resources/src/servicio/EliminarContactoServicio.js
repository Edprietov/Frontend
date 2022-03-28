import axios from "axios";

const API_URL = "http://localhost:8080";
const CONTROLADOR = "/eliminar";

class EliminarContactoServicio {
    EliminarContactoporId(id) {
        return axios.delete(API_URL + CONTROLADOR + "/"+ id);

    }
}

export default new EliminarContactoServicio();
