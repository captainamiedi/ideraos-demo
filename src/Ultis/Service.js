const login = (payload) => {
    localStorage.setItem('user-details', JSON.stringify(payload));
    const {name, password} =  payload;
    if (name && password) {
        const string = Math.random().toString(30);
        return 'token'+ ' ' + string
    }
}

const signup = (payload) => {
    localStorage.setItem('user-details', JSON.stringify(payload));
    const {name, password} =  payload;
    if (name && password) {
        const string = Math.random().toString(30);
        return 'token'+ ' ' + string
    }
}

export default {
    login,
    signup
}