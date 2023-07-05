import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { arrayCarGlobal } from '../../context/CarContext';
import { useNavigate } from 'react-router';
import React from 'react'

export default function CardComponent ({img, title, text, price}) {

  const navigate = useNavigate()

  return (
    <>
      <Card maxW='sm' border={'1px'} borderColor={''} marginTop={'20px'}>
        <CardBody>
          <Image
            src={img}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>{text}</Text>
            <Text color='blue.600' fontSize='2xl'>{price}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={()=> {
              arrayCarGlobal.shift()
              arrayCarGlobal.push({img, title, text, price})
              navigate('/details')
              }}>
            Comprar agora
            </Button>
            <Button variant='ghost' colorScheme='blue'>Adicionar no carrinho</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}