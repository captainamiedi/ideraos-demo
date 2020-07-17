import Vue from 'vue';
import Vuex from 'vuex'
import state from "./state"
import Login from "./Module/Login";
// import Signup from './Module/Signup'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
    state,
    mutataions: {},
    actions: {},
    getters: {},
    modules: {
        Login
    }
});
