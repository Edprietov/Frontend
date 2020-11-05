import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/crear-usuario";

class RegistrarUsuarioServicio{
    registrarUsuario(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            nombre:info.nombre,
            correo:info.correo,
            telefono:info.telefono,
            contrasena:info.contrasena
        });
    }
}

export default new RegistrarUsuarioServicio();