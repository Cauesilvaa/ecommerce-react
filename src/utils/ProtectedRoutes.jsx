import App from '../App'
import LoginServices from '../services/login/Login'

const loginService = new LoginServices()

const ProtectedRoutes = ({children}) => {
  const userAuth = loginService.userAuth()

  // 'userAuth' for = true ent renderiza o componente senão é redirecionado para login
  return userAuth ? children : <App />
}

export default ProtectedRoutes