import Vue from 'vue'
import Vuex from "vuex"
import crearPersistencia from "vuex-persistedstate"

Vue.use(Vuex)


// el store de vuex usuando el plugin de persistencia vuex-persistedstate
export default new Vuex.Store({
        plugins: [crearPersistencia()],
        state: {
            id:"pordefecto",
            usuarioRol: ""
        },

        mutations:{// para hacer cambios al valor. Solo se hace en inicio
            actualizarGoogleId(state, valor){
                state.id = valor
            },
            actualizarUsuarioRol(state, valor){
                state.usuarioRol = valor;

            }
        },
        getters:{//para pedir el valor
            getGoogleId: state =>{
                return state.id
            },
            getUsuarioRol: state =>{
                return state.usuarioRol
            }

        }

    });


