import Service from '../../Ultis/Service'

const state = {
    token: localStorage.getItem("user-token") || "",
    status: "",
}

const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
}

const actions = {
    LOGIN: ({commit}, payload) => {
        return new Promise((resolve) => {
            commit('AUTH_REQUEST')
            const token = Service.login(payload)
            if (token) {
                localStorage.setItem("user-token", JSON.stringify(token));
                commit("AUTH_SUCCESS", token);
                resolve()
            }
        })
    },

    LOGOUT: ({commit}) => {
        return new Promise((resolve) => {
            commit('LOGOUT_SUCCESS')
            localStorage.removeItem('user-token')
            localStorage.clear();
            resolve()
        })
    },

    REGISTER: ({commit}, payload) => {
        return new Promise((resolve) => {
            commit('AUTH_REQUEST')
            const token = Service.signup(payload)
            if (token) {
                localStorage.setItem("user-token", JSON.stringify(token));
                commit("AUTH_SUCCESS", token);
                resolve()
            }
        })
    }
}

const mutations = {
    AUTH_REQUEST: state => {
        state.status = 'loading'
    },
    AUTH_SUCCESS: (state, payload) => {
        state.status = 'success',
        state.token = payload
    },
    LOGOUT_SUCCESS: state => {
        state.status = '',
        state.token = ''
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}