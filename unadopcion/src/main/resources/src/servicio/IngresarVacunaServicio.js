import axios from "axios";

const UNADOPCION_API_URL = "/api";
const CONTROLADOR = "/ingresar-vacuna";

class IngresarVacunaServicio{

    enviarDatosVacuna(info){
        return axios.post(UNADOPCION_API_URL + CONTROLADOR, {
            vacunaNombre: info.vacunaNombre,
            vacunaTipo: info.vacunaTipo,
            vacunaClase: info.vacunaClase,
        } );


    }
}

export default new IngresarVacunaServicio();