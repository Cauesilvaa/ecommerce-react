import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import Carrosel from '../../components/carrosel/Carrosel'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import Button from 'react-bootstrap/Button'
import CardComponent from '../../components/card/CardComponent'
import imgChuteira1 from '../../assets/chuteira-1.jpg'
import imgChuteira2 from '../../assets/chuteira-2.jpg'
import imgChuteira3 from '../../assets/chuteira-3.jpg'
import imgChuteira4 from '../../assets/chuteira-4.jpg'
import { CarContext } from "../../context/CarContext";
import { arrayCarGlobal } from "../../context/CarContext";


const Home = () => {  

  // const {car, setCar} = useContext(CarContext)
  
  const getCars = [
    {id: Math.random(), img: imgChuteira1, title:"Chuteira Nike Mercurial", text: "Produto nike para jogar futebol de campo", price: 'R$: 220,99'},
    {id: Math.random(), img: imgChuteira2, title:"Chuteira Nike Mercurial", text: "Produto nike para jogar futebol de campo", price: 'R$: 2790,99'},
    {id: Math.random(), img: imgChuteira3, title:"Chuteira Nike Mercurial do Ney na Copa do mundo de 2014", text: "Produto nike para jogar futebol de campo e dar aula ta ?!", price: 'R$: 320,99'},
    {id: Math.random(), img: imgChuteira4, title:"Chuteira Nike Mercurial do CR7 ta?!", text: "Produto nike para jogar futebol de campo", price: 'R$: 320,99'}]

  // getCars.push({id: Math.random(), img: imgChuteira4, title:"Chuteira Nike Mercurial do CR7 ta?!", text: "Produto nike para jogar futebol de campo", price: 'R$: 320,99'})

  // console.log(getCars);
    
  useEffect(() => {
    // setCar(getCars)
    // console.log(car);
    // arrayCarGlobal.push('messi')
    // console.log(arrayCarGlobal);
  })  
  
    
    // getCars.forEach((el) => {
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
        { getCars.length > 0 ? getCars.map((el) => <CardComponent key={el.id} img={el.img} title={el.title} text={el.text} price={el.price}/> ) : <h1>Não ha itens</h1> }
      </div>

    </div>
  )
}

export default Home