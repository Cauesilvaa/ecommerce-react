import FormValidationBuy from '../../components/formValidationBuy/FormValidationBuy'
import Multistep from '../../components/formValidationBuy/FormValidationBuy'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Buy = () => {  

  return (    
    <div className='div-buy'>
        <NavbarComponent />

        <Alert status='warning' alignItems="center">
          <AlertIcon />
          Confirme seus dados para para finalizar a compra
        </Alert>

        <FormValidationBuy />
    </div>
  )
}

export default Buy