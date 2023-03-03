import React from 'react'
import './CardComponent.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { arrayCarGlobal } from '../../context/CarContext';
// import imgChuteira1 from '../../assets/chuteira-1.jpg'
import { CarContext } from "../../context/CarContext";

const CardComponent = ({img, title, text, price}) => {

  const navigate = useNavigate()

  return (    
    <>
      <Card style={{ width: '18rem', marginTop: '20px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {text} </Card.Text>
        <Card.Text> {price} </Card.Text>

        <Button variant="primary" onClick={()=> {
          arrayCarGlobal.shift()
          arrayCarGlobal.push({img, title, text, price})
          navigate('/details')
          }}>Detalhes</Button>
          
      </Card.Body>
      </Card>

    </>
  )
}

export default CardComponent