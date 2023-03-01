import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import Carrosel from '../../components/carrosel/Carrosel'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import Button from 'react-bootstrap/Button'
import CardComponent from '../../components/card/CardComponent'
import imgChuteira1 from '../../assets/chuteira-1.jpg'
import imgChuteira2 from '../../assets/chuteira-2.jpg'
import imgChuteira3 from '../../assets/chuteira-3.jpg'
import { CarContext } from "../../context/CarContext";

const Home = () => {

  const {car, setCar} = useContext(CarContext)
  
  useEffect(() => {
    setCar("Ney")
    console.log(car);
  })  
  
  const [getCards, setCards] = useState([
    {id: Math.random(), img: imgChuteira1, title:"Chuteira Nike Mercurial", text: "Produto nike para jogar futebol de campo", price: 'R$: 220,99'}, 
    {id: Math.random(), img: imgChuteira2, title:"Chuteira Nike Mercurial", text: "Produto nike para jogar futebol de campo", price: 'R$: 2790,99'}, 
    {id: Math.random(), img: imgChuteira3, title:"Chuteira Nike Mercurial do Ney na Copa do mundo de 2014", text: "Produto nike para jogar futebol de campo e dar aula ta ?!", price: 'R$: 320,99'}])
    
    // getCards.forEach((el) => {
    //   // console.log(el);
    //   setCar(el)
    // });
    
    // console.log(car);

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
        {getCards.length > 0 && getCards.map((el) => <CardComponent key={el.id} img={el.img} title={el.title} text={el.text} price={el.price}/> )}
      </div>

    </div>
  )
}

export default Home