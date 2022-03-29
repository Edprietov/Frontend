import axios from "axios";
import URL from "@/servicio/Url";

const CONTROLADOR = "/actualizar";

class ActualizarContactoServicio{
    ActualizarContacto(info, id){
        return axios.post(URL.getUrl() + CONTROLADOR + "/"+ id, {
            nombreContacto: info.nombre,
            apellidoContacto: info.apellido,
            correoContacto: info.correo,
            celularContacto: info.celular,
            paisContacto: info.pais,
            ciudadContacto: info.ciudad,
            direccionContacto: info.direccion,
            codigoContacto: info.codigo,
        });
    }
}

export default new ActualizarContactoServicio();