import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Alert,
  AlertIcon
} from '@chakra-ui/react';

import imgLogin from '../../assets/img-login2.png'
import LoginServices from '../../services/login/Login';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SpanError from '../../components/spanError/SpanError';

const loginService = new LoginServices()

const Login = () => {

  const [alert, setAlert] = useState(false)
  const { register, handleSubmit, formState: { errors }} = useForm()
  const navigate = useNavigate()

  function hash(s) {
    return s.split("").reduce(function(a, b) {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
  }

  function loginUser (data) {

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

    if (data.login !== '1' || data.password !== '1') return setAlert(true)


    localStorage.setItem("token", hash("teste"))
    setAlert(false)
    navigate('/home')
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>

          <form onSubmit={handleSubmit(loginUser)}>

            <Heading fontSize={'2xl'}>Faça login na nossa plataforma</Heading> <br />

            <FormControl id="login">
              <FormLabel>Login</FormLabel>
              <Input type="login" {...register('login', { required: true })}/>
              {errors.login && <SpanError message={'Campo obrigatorio'} />}
            </FormControl>

            <br />

            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" {...register('password', { required: true })}/>
              {errors.password && <SpanError message={'Campo obrigatorio'} />}
            </FormControl>

            <br />

            <Stack spacing={6}>

              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Lembrar</Checkbox>
                <Link color={'blue.500'}>Esqueci minha senha</Link>
              </Stack>

              <Button colorScheme={'blue'} variant={'solid'} type='submit'>Entrar</Button>

              <Stack direction={{ base: 'column' }} align={'center'} justify={'space-between'}>
                <Link color={'blue.500'} onClick={() => {navigate('/registerUser')}}>Criar conta</Link>
              </Stack>

            </Stack>
            
          </form>

          {alert == true && 
            <Stack spacing={3}>
              <Alert status='error'>
                <AlertIcon />Usuario não encontrado
              </Alert>
            </Stack> 
          }

        </Stack>

      </Flex>

      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={imgLogin} />
      </Flex>

    </Stack>
  );
}

export default Login;