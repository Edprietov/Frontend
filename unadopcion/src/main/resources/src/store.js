import Vue from 'vue'
import Vuex from "vuex"
import crearPersistencia from "vuex-persistedstate"

Vue.use(Vuex)


// el store de vuex usuando el plugin de persistencia vuex-persistedstate
export default new Vuex.Store({
        plugins: [crearPersistencia()],
        state: {
            id: undefined,
            mascota: undefined,
        },

        mutations:{// para hacer cambios al valor. Solo se hace en inicio
            actualizarGoogleId(state, valor){
                state.id = valor
            },
            actualizarMascotaAdopcion(state, valor){
                if(state.id != null){
                    state.mascota = valor;
                }else{
                    console.log("Hay un error actualizando a la mascota, no hay usuario logeado")
                }
            }
        },
        getters:{//para pedir el valor
            getGoogleId: state =>{
                return state.id
            },
            getMascotaAdopcion: state => {
                return state.mascota
            }
        }

    });


