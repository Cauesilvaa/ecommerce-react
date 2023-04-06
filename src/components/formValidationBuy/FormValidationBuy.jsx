import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import Badge from 'react-bootstrap/Badge';

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [card, setCard] = useState()

  useEffect(() => {
    console.log('veio no effect');    
  })  
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Dados pessoais </Heading>
            
        <FormControl>
          <FormLabel htmlFor="full-name" fontWeight={'normal'}> Nome completo </FormLabel>
          <Input id="full-name" />
        </FormControl>      

      <Flex mt="3%">
        <FormControl mr="3%">
            <FormLabel htmlFor="cpf" fontWeight={'normal'}> CPF </FormLabel>
            <Input id="cpf" placeholder="000.000.000-00" />
          </FormControl>

          <FormControl mr="3%">
            <FormLabel htmlFor="cellphone" fontWeight={'normal'}> Celular </FormLabel>
            <Input id="cellphone" placeholder="(00) 000000000" />
          </FormControl>

          <FormControl mr="3%">
          <FormLabel htmlFor="birthday" fontWeight={'normal'}> Data de nascimento </FormLabel>
          <Input id="birthday" placeholder="00/00/0000" />
        </FormControl>
        
      </Flex>

      <Flex mt="3%">
        <FormControl mr="3%">
          <FormLabel htmlFor="email" fontWeight={'normal'}> Email </FormLabel>
          <Input id="email" type="email" placeholder="email@email.com" />
          <FormHelperText>Verifique se o email esta correto.</FormHelperText>
        </FormControl>

        <FormControl mr="3%">
          <FormLabel htmlFor="cep" fontWeight={'normal'}> CEP </FormLabel>
          <Input id="cep" placeholder="00000-000" />
        </FormControl>

        <FormControl mr="3%">
          <FormLabel htmlFor="neighborhood" fontWeight={'normal'}> Bairro </FormLabel>
          <Input id="neighborhood" />
        </FormControl>
      </Flex>

      <Flex mt="3%">
      <FormControl mr="3%">
          <FormLabel htmlFor="street" fontWeight={'normal'}> Rua </FormLabel>
          <Input id="street" />
        </FormControl>

        <FormControl mr="3%">
          <FormLabel htmlFor="number" fontWeight={'normal'}> Numero </FormLabel>
          <Input id="number" />
        </FormControl>

        <FormControl mr="3%">
          <FormLabel htmlFor="complement" fontWeight={'normal'}> Complemento </FormLabel>
          <Input id="complement" />
        </FormControl>
      </Flex>

      {/* <FormControl mt="3%">
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%"> Password </FormLabel>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}> {show ? 'Hide' : 'Show'} </Button>
          </InputRightElement>

        </InputGroup>
      </FormControl> */}
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%"> Pagamento </Heading>

      <br />
      <h2 style={{textAlign: 'center', color: 'black'}}>
        <Badge bg="secondary">Forma de pagamento</Badge>
      </h2>
      <br /> <br />

      <FormControl as={SimpleGrid} columns={{ lg: 11 }} alignItems={'center'} textAlign={'center'}>
        <FormLabel htmlFor='isRequired'>Cartão:</FormLabel>
        <Switch id='isRequiredCard' onChange={(e) => {console.log(e);}} />

        <FormLabel htmlFor='isRequired'>Boleto:</FormLabel>
        <Switch id='isRequired' />

        <FormLabel htmlFor='isRequired'>Pix:</FormLabel>
        <Switch id='isRequired' />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]} mt={"5%"}>

        <FormLabel htmlFor="country" fontSize="sm" fontWeight="md" color="gray.700" _dark={{color: 'gray.50',}}>
          Pais/ naturalidade
        </FormLabel>
        
        <Select id="country" name="country" autoComplete="country" placeholder="Selecione" focusBorderColor="brand.400" 
          shadow="sm" size="sm" w="full" rounded="md">
          <option value="Brasil">Brasil</option>
          <option value="Estados unidos">Estados unidos</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </Select>
      </FormControl>

      <Flex mt="3%">
        <FormControl mr="3%">
            <FormLabel htmlFor="card-number" fontWeight={'normal'}> Numero do cartão </FormLabel>
            <Input id="card-number" />
          </FormControl>

          <FormControl mr="3%">
            <FormLabel htmlFor="card-name" fontWeight={'normal'}> Nome do cartão </FormLabel>
            <Input id="card-name"/>
          </FormControl>
      </Flex>

      <Flex mt="3%">
        <FormControl mr="3%">
            <FormLabel htmlFor="card-number" fontWeight={'normal'}> MM/AA </FormLabel>
            <Input id="card-number" />
          </FormControl>

          <FormControl mr="3%">
            <FormLabel htmlFor="card-name" fontWeight={'normal'}> Código de segurança </FormLabel>
            <Input id="card-name"/>
          </FormControl>        
      </Flex>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}