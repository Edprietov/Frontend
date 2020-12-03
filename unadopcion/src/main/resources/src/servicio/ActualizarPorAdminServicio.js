import axios from "axios";
const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/actualizar";



class ActualizarPorAdminServicio{
    actualizarUsuario(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            adminGoogleId: info.adminGoogleId,
            usuarioGoogleId: info.usuarioGoogleId,
            usuarioRol: info.usuarioRol,
            usuarioPuntos: info.usuarioPuntos
        });
    }
}

export default new ActualizarPorAdminServicio();