import React from 'react'
import './Home.css'
import Carrosel from '../../components/carrosel/Carrosel'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (    
    <div>
      <NavbarComponent />
      <Carrosel />


      <div className="mb-2 class-btn-large">

      <h1>Categorias</h1>

        <Button style={{backgroundColor: '#539CCF'}} size="lg" className='category-btn'>
          Variados
        </Button>

        <Button style={{backgroundColor: '#539CCF'}} size="lg" className='category-btn'>
          Esporte
        </Button>

        <Button style={{backgroundColor: '#539CCF'}} size="lg" className='category-btn'>
          Casa
        </Button>

        <Button style={{backgroundColor: '#539CCF'}} size="lg" className='category-btn'>
          Eletronicos
        </Button>

        <Button style={{backgroundColor: '#539CCF'}} size="lg" className='category-btn'>
          Moda
        </Button>

      </div>

      <h1 className='text-prod-em-alta'>Produtos em alta</h1>

    </div>
  )
}

export default Home