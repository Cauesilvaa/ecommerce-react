import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import {
  Progress,
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
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  Switch,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import Badge from 'react-bootstrap/Badge';
import { useForm } from 'react-hook-form';
import { Stack } from 'react-bootstrap';
import { Form } from 'react-router-dom';


const FormValidationBuy = () => {

  const { register, handleSubmit, formState: { errors }} = useForm()

  function createBuy (data) {
    console.log(data);
  }

  function searchCep(cep) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const result = await data.json()
        console.log(result);
        if(result.erro) resolve('')
        else resolve(populateCepsFields(result))
      } catch (error) {
        console.log(error);
        reject(error)
      }      
    })
  }

  function populateCepsFields(data) {
    document.getElementById('neighborhood').value = data.bairro
    document.getElementById('street').value = data.logradouro
    document.getElementById('city').value = data.uf
    document.getElementById('state').value = data.localidade
  }

  const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
   
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Dados pessoais </Heading>
              
          <FormControl>
            <FormLabel htmlFor="full-name" fontWeight={'normal'}> Nome completo </FormLabel>
            <Input id="full-name" {...register('full_name')} />
          </FormControl>      
  
        <Flex mt="3%">
          <FormControl mr="3%">
              <FormLabel htmlFor="cpf" fontWeight={'normal'}> CPF </FormLabel>
              <Input id="cpf" placeholder="000.000.000-00" {...register('cpf')} />
            </FormControl>
  
            <FormControl mr="3%">
              <FormLabel htmlFor="cellphone" fontWeight={'normal'}> Celular </FormLabel>
              <Input id="cellphone" placeholder="(00) 000000000" {...register('cell_phone')}/>
            </FormControl>
  
            <FormControl mr="3%">
            <FormLabel htmlFor="birthday" fontWeight={'normal'}> Data de nascimento </FormLabel>
            <Input id="birthday" placeholder="00/00/0000" {...register('birthday')}/>
          </FormControl>
          
        </Flex>
  
        <Flex mt="3%">
          <FormControl mr="3%">
            <FormLabel htmlFor="email" fontWeight={'normal'}> Email </FormLabel>
            <Input id="email" type="email" placeholder="email@email.com" {...register('email')}/>
            <FormHelperText>Verifique se o email esta correto.</FormHelperText>
          </FormControl>
  
          <FormControl mr="3%">
            <FormLabel htmlFor="cep" fontWeight={'normal'}> CEP </FormLabel>
            <Input id="cep" placeholder="00000-000" {...register('cep')} onChange={(e) => {
              if (e.target.value.length == 8) searchCep(e.target.value)
              }}/>
          </FormControl>
  
          <FormControl mr="3%">
            <FormLabel htmlFor="neighborhood" fontWeight={'normal'}> Bairro </FormLabel>
            <Input id="neighborhood" {...register('neighborhood')}/>
          </FormControl>
        </Flex>
        
        <Flex mt="3%">
        <FormControl mr="3%">
            <FormLabel htmlFor="country" fontWeight={'normal'}> Nacionalidade </FormLabel>
            <Input id="country" {...register('country')}/>
          </FormControl>
  
          <FormControl mr="3%">
            <FormLabel htmlFor="city" fontWeight={'normal'}> Cidade </FormLabel>
            <Input id="city" {...register('city')}/>
          </FormControl>
  
          <FormControl mr="3%">
            <FormLabel htmlFor="state" fontWeight={'normal'}> Estado </FormLabel>
            <Input id="state" {...register('state')}/>
          </FormControl>
        </Flex>
  
        <Flex mt="3%">
        <FormControl mr="3%">
            <FormLabel htmlFor="street" fontWeight={'normal'}> Rua </FormLabel>
            <Input id="street" {...register('street')}/>
          </FormControl>
  
          <FormControl mr="3%">
            <FormLabel htmlFor="number" fontWeight={'normal'}> Numero </FormLabel>
            <Input id="number" {...register('number')}/>
          </FormControl>
  
          <FormControl mr="3%">
            <FormLabel htmlFor="complement" fontWeight={'normal'}> Complemento </FormLabel>
            <Input id="complement" {...register('complement')}/>
          </FormControl>
        </Flex>
      </>
    );
  };

  const DataCard = () => {
    return (
      <>
        <Flex mt="3%">
          <FormControl mr="3%">
              <FormLabel htmlFor="card-number" fontWeight={'normal'}> Numero do cartão </FormLabel>
              <Input id="card-number" {...register('card_number')}/>
            </FormControl>
  
            <FormControl mr="3%">
              <FormLabel htmlFor="card-name" fontWeight={'normal'}> Nome do cartão </FormLabel>
              <Input id="card-name" {...register('card_name')}/>
            </FormControl>
        </Flex>
  
        <Flex mt="3%">
          <FormControl mr="3%">
              <FormLabel htmlFor="card-cod1" fontWeight={'normal'}> MM/AA </FormLabel>
              <Input id="card-cod1" {...register('card_cod1')}/>
            </FormControl>
  
            <FormControl mr="3%">
              <FormLabel htmlFor="card-cod" fontWeight={'normal'}> Código de segurança </FormLabel>
              <Input id="card-cod" {...register('card_cod')}/>
            </FormControl>        
        </Flex>
      </>
    )
  }

  const DataBoleto = () => {
    return (
      <>
        <FormControl as={GridItem} colSpan={6}>
  
          <FormLabel htmlFor="street_address" fontSize="sm" fontWeight="md" color="gray.700" _dark={{ color: 'gray.50', }} mt="2%">
            Código boleto
          </FormLabel>
  
          <Input type="text" id="hashpay" focusBorderColor="brand.400" shadow="sm" size="sm" w="full" rounded="md" value={'79gh79k7lkk7gfs87a76sd9fgf0hds7as54214sdg5h6fgh7'} readOnly {...register('hashPay')}/>
          <FormHelperText>Copie o código.</FormHelperText>
        </FormControl>
      </>
    )
  }

  const DataPix = () => {
    return (
      <>
        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
  
          <FormLabel htmlFor="pix" fontSize="sm" fontWeight="md" color="gray.700" _dark={{ color: 'gray.50', }} mt="2%">
            Pix copia e cola
          </FormLabel>
  
          <Input type="text" id="pix" autoComplete="city" focusBorderColor="brand.400" shadow="sm" size="sm" w="full" rounded="md" value={'b6c4vb413m65l70ç98gd6s864d62fd64677f7ds9s089g8fhg7643dfs'} readOnly {...register('pix')}/>
          <FormHelperText>Copie a chave.</FormHelperText>
        </FormControl>
      </>
    )
  }

  const Form2 = () => {

    const [value, setValue] = useState('1')
  
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Pagamento </Heading>
  
        <br />
        {/* <h2 style={{textAlign: 'center'}}>
          <Badge bg="primary">Forma de pagamento</Badge>
        </h2> */}
        <br /> <br />
  
        <FormControl as={SimpleGrid} columns={{ lg: 11 }} alignItems={'center'} textAlign={'center'}>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
              <Radio value='1'>Cartão</Radio>
              <Radio value='2'>Boleto</Radio>
              <Radio value='3'>Pix</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
  
        <br />
        <br />
  
        { value == '1' && <DataCard /> }
        { value == '2' && <DataBoleto /> }
        { value == '3' && <DataPix /> }
  
      </>
    );
  };

  const Form3 = () => {
    return (
      <>      
        <Alert variant="primary">
        <Alert.Heading>Dados da compra</Alert.Heading>
        <hr />
        <p className="mb-0">
          Aqui vai ficar os dados
        </p>
      </Alert>
      </>
    );
  };

  const MessageSucces = () => {
    return (
      <>      
        <Alert variant="primary">
        <Alert.Heading>Compra finalizada com sucesso</Alert.Heading>
        <hr />
        <p className="mb-0">
          Confira o status da compra em seu email
        </p>
      </Alert>
      </>
    );
  };
  
  function MultistepFormChakraUi() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
  
    return (
      <>
        <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form" onSubmit={handleSubmit(createBuy)}>
  
          <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
  
          {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
  
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                
                <Button onClick={() => { setStep(step - 1); setProgress(progress - 33.33); }} isDisabled={step === 1} colorScheme="teal"
                  variant="solid" w="7rem" mr="5%">
                  Back
                </Button>
  
                <Button w="7rem" isDisabled={step === 3} colorScheme="teal" variant="outline"
                  onClick={() => { setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 33.33);
                    }
                  }} >
                  Next
                </Button>
  
              </Flex>
  
              {step === 3 ? (
                <Button w="15rem" colorScheme="red" variant="solid" type='submit'
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                  Confirmar compra
                </Button>
              ) : null}
            </Flex>
  
          </ButtonGroup>
        </Box>
      </>
    );
  }

  return (
    <div> <MultistepFormChakraUi /> </div>
  )
}

export default FormValidationBuy