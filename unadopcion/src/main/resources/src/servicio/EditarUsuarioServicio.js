import axios from "axios";

const UNADOPCION_API_URL = "http://localhost:8080";
const CONTROLADOREDITAR = "/editar-usuario";
const CONTROLADORBUSCAR = "/mostrar-perfil";

class EditarUsuarioServicio{
    EditarUsuario(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOREDITAR, {
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

    ActualizarUsuario(nombre){
        return axios.post(UNADOPCION_API_URL + CONTROLADORBUSCAR, nombre);
    }
}

export default new EditarUsuarioServicio();