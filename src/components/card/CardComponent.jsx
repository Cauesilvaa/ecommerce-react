import React from 'react'
import './CardComponent.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import imgChuteira1 from '../../assets/chuteira-1.jpg'

const CardComponent = ({img, title, text}) => {
  return (    
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

    </>
  )
}

export default CardComponent