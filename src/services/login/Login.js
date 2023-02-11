import axios from 'axios'

export default class LoginServices {
    // constructor () {
    //     this.axios = axios.create({
    //         baseURL: window.process.env.EXTERNAL_URL
    //     })
    // }

    async Login (dados) {
        const {data} = await axios.post('https://anotadin-api.herokuapp.com/login', dados)

        if (data) {
            localStorage.setItem("nome", data.user.nome)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("token", data.user.token)

            return true
        }

        return false
    }

    userAuth() {
        return localStorage.getItem('token') == undefined ? false : true
    }

    logout () {
        localStorage.removeItem("token")
    }
}