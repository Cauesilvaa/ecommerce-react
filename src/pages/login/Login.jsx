import './Login.css'
import imgLogin from '../../assets/img-login.jpg'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Home from '../home/Home';

const Login = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function LoginSistem () {

    if (login !== '1' || password !== '1') return console.log('Usuario invalido')

    console.log('Usuario valido')
    {<Link to={<Home />}/>}
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

            <button type='button' onClick={LoginSistem}>Entrar</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Login
