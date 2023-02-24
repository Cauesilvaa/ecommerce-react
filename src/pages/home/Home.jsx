import React, { useState } from 'react'
import './Home.css'
import Carrosel from '../../components/carrosel/Carrosel'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import Button from 'react-bootstrap/Button'
import CardComponent from '../../components/card/CardComponent'
import imgChuteira1 from '../../assets/chuteira-1.jpg'
import imgChuteira2 from '../../assets/chuteira-2.jpg'
import imgChuteira3 from '../../assets/chuteira-3.jpg'

const Home = () => {

  const [getCards, setCards] = useState([{id: Math.random(), img: imgChuteira1}, {id: Math.random(), img: imgChuteira2}, {id: Math.random(), img: imgChuteira3}])
  console.log(getCards);

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

      <div className='card-container'>
        {getCards.length > 0 && getCards.map((el) => <CardComponent key={el.id} img={el.img} title={"Teste"} text={"aaaaaaa"}/> )}
      </div>

    </div>
  )
}

export default Home