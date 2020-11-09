import axios from "axios";
const UNADOPCION_API_URL = "api";
const CONTROLADOR = "/editar-usuario";



class EditarUsuarioServicio{
    editarUsuario(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            googleId: info.googleId,
            telefono: info.telefono,
            lugar: info.lugar,
            info: info.info
        });
    }


}

export default new EditarUsuarioServicio();