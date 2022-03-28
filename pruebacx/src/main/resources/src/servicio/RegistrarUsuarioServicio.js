import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/crear-usuario";

class RegistrarUsuarioServicio{
    registrarUsuario(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            nombre: info.nombre,
            nombreReal: info.nombreReal,
            correo: info.correo,
            telefono: info.telefono,
            contrasena: info.contrasena,
            rol: info.rol,
            lugar: info.lugar,
            info: info.info,
            //imagen: info.imagenSeleccionada,
        });
    }
}

export default new RegistrarUsuarioServicio();