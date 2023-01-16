import { useState } from 'react'
import './Login.css'
import imgLogin from '../../assets/img-login.jpg'

function Login() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function Login () {

    if (login !== 'loginTeste' || password !== 'senhaTeste') return console.log('Usuario invalido')

    console.log('Usuario valido')
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

            <button type='button' onClick={Login}>Entrar</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Login
