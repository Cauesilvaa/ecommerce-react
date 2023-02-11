import './Login.css'
import imgLogin from '../../assets/img-login.jpg'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Home from '../home/Home';
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
          <h1>testando</h1>

          <form className='form-login'>
            
            <div className='form-control'>
              <label htmlFor='login'>Login</label> <br/>
              <input type="text" name="login" placeholder="Digite o e-mail" onChange={(e) => setLogin(e.target.value)}></input>
            </div>

            <br />
            
            <div className='form-control'>
              <label htmlFor='login'>Senha</label> <br/>
              <input type="text" name="login" placeholder="Digite a senha" onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button type='button' onClick={LoginSistem} disabled={btnDisabled}>Entrar</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Login
