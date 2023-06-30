import React, { useState } from 'react';
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import SpanError from '../../components/spanError/SpanError';
import { useNavigate } from 'react-router-dom';

// const schema = object({
//   name: string().required()
// })

export default function RegisterUser (){

  const { register, handleSubmit, formState: { errors } } = useForm(/*{resolver: yupResolver(schema)}*/)

  const navigate = useNavigate()

  function createUser(data) {
    console.log(data);
  }

  const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Realize seu cadastro </Heading>

        <Flex>

          <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={'normal'}> Nome </FormLabel>
            <Input id="first-name" placeholder="Nome" {...register('first_name', { required: true })}/>
            {errors.first_name && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="last-name" fontWeight={'normal'}> Sobrenome </FormLabel>
            <Input id="last-name" placeholder="Sobrenome" {...register('last_name', { required: true })}/>
            {errors.last_name && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

        </Flex>

        <Flex marginTop={'30'}>

          <FormControl mr="5%">
            <FormLabel htmlFor="birth" fontWeight={'normal'}> Data de Nascimento </FormLabel>
            <Input id="birth" type='date' {...register('birth', { required: true })} />
            {errors.birth && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="cpf" fontWeight={'normal'}> CPF </FormLabel>
            <Input id="cpf" placeholder="000.000.000-00" {...register('cpf', { required: true })}/>
            {errors.cpf && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

        </Flex>

        <Flex marginTop={'30'}>

          <FormControl mr="5%">
            <FormLabel htmlFor="email" fontWeight={'normal'}> Email </FormLabel>
            <Input id="email" placeholder="email@email.com" {...register('email', { required: true })}/>
            {errors.email && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

          <FormControl>
          <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%"> Senha </FormLabel>
          
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Senha" {...register('password', { required: true })}/>            
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Esconder' : 'Exibir'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password && <SpanError message={'Campo obrigatorio'} />}
        </FormControl>

        </Flex>
      </>
    );
  };

  const Form2 = () => {
    return (
      <>
        <FormControl as={GridItem} colSpan={[6, 3]} marginTop={'5'} mr="5%">
          <FormLabel
            htmlFor="country"
            fontWeight={'normal'} mt="2%">
            Nacionalidade
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Selecione"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md" {...register('country', { required: true })}>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </Select>
          {errors.country && <SpanError message={'Campo obrigatorio'} />}
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="cep"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{ color: 'gray.50' }}
            mt="2%">
            CEP
          </FormLabel>
          <Input
            type="text"
            name="cep"
            id="cep"
            autoComplete="cep"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            {...register('cep', { required: true })}
          />
          {errors.cep && <SpanError message={'Campo obrigatorio'} />}
        </FormControl>

        <Flex>

          <FormControl mr="5%" marginTop={'20px'}>
            <FormLabel htmlFor="street" fontWeight={'normal'}> Endereço </FormLabel>
            <Input id="street" type='text' {...register('street', { required: true })}/>
            {errors.street && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

          <FormControl marginTop={'20px'}>
            <FormLabel htmlFor="complement" fontWeight={'normal'}> Complemento </FormLabel>
            <Input id="complement" type='text' {...register('complement', { required: true })}/>
            {errors.complement && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

        </Flex>

        <Flex>

          <FormControl mr="5%" marginTop={'20px'}>
            <FormLabel htmlFor="city" fontWeight={'normal'}> Cidade </FormLabel>
            <Input id="city" type='text' {...register('city', { required: true })}/>
            {errors.city && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

          <FormControl marginTop={'20px'}>
            <FormLabel htmlFor="state" fontWeight={'normal'}> Estado </FormLabel>
            <Input id="state" type='text' {...register('state', { required: true })}/>
            {errors.state && <SpanError message={'Campo obrigatorio'} />}
          </FormControl>

        </Flex>
      </>
    );
  };

  function Multistep() {
    return (
      <>
        <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form" onSubmit={handleSubmit(createUser)}>

            <Form1 />

            <Form2 />

          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
                <Button colorScheme='blue' variant='outline' onClick={() => navigate('/login')}> Voltar </Button>
                <Button w="7rem" colorScheme="blue" variant="solid" type='submit'> Cadastrar </Button>
            </Flex>
          </ButtonGroup>
        </Box>
      </>
    );
  }

  return ( <> <Multistep /> </> )
}