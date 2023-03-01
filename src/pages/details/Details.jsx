import React from 'react'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import img1 from '../../assets/chuteira-1.jpg'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Details = () => {
  return (
    <div>
        <NavbarComponent />

        {/* <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
       </Row> */}
        Detalhes
    </div>
  )
}

export default Details