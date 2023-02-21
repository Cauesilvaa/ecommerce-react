import './Login.css'
import imgLogin from '../../assets/img-login.jpg'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import LoginServices from '../../services/login/Login';

const loginService = new LoginServices()

const Login = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const navigate = useNavigate()

  function hash(s) {
    return s.split("").reduce(function(a, b) {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
  }

  function LoginSistem (e) {

    e.preventDefault()

    setBtnDisabled(true)

    /*
    const response = await loginService.Login({email: login, password: password})
    console.log(response);

    if (response == true){
      alert('Usuario logado')
      setBtnDisabled(false)
    }

    setBtnDisabled(false)
    return alert('Usuario invalido')
    */

    if (login !== '1' || password !== '1') {
      setBtnDisabled(false)
      return alert('Usuario invalido')
    }

    localStorage.setItem("token", hash("teste"))
    alert('Usuario valido')
    navigate('/home')
    setBtnDisabled(false)
  }

  return (
    <div className="Login">
      
      <div className='div-fundo-login-1'>
        <img src={imgLogin}/>
      </div>

      <div className='div-fundo-login-2'>

        <div className='div-login'>
          <h1>Entrar</h1>

          <form className='form-login'>

            <div className="form-floating mb-3">
              <input type="email" className="form-control inputs-login" id="floatingInput" onChange={(e) => setLogin(e.target.value)}/>
              <label htmlFor="floatingInput">E-mail</label>
            </div>

            <div className="form-floating">
              <input type="password" className="form-control inputs-login" id="floatingPassword" onChange={(e) => setPassword(e.target.value)}/>
              <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button type='button' onClick={LoginSistem} disabled={btnDisabled}>Entrar</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Login
