import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/mostrar-perfil/";

class MostrarPerfil{
    mostrarPerfil(googleId){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR + googleId);
    }
}

export default new MostrarPerfil();