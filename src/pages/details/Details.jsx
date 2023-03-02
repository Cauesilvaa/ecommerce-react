import React from 'react'
import './Details.css'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import img1 from '../../assets/chuteira-1.jpg'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Details = () => {
  return (
    <div>
        <NavbarComponent />

        <div className='div-all'>

        <div className='card-details'>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                    {/* <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text> */}
                    </Card.Body>
                </Card>
                </Col>
            ))}
          </Row>
        </div>

        <div className='class-details'>
          <Alert variant="secondary">
            
            <Alert.Heading>Nome do Produto</Alert.Heading>
              <h5>Preço do produto</h5>
              <p>
                detalhes do produto detalhes do produto detalhes do produto detalhes do produto 
                detalhes do produto detalhes do produto detalhes do produto detalhes do produto 
                detalhes do produto detalhes do produto detalhes do produto detalhes do produto 
              </p>
              <hr />

            <Form>
              <h5>Escolha uma cor</h5>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="Vermelho" name="group1" type={type} id={`inline-${type}-1`} />

                    <Form.Check inline label="Preto" name="group1" type={type} id={`inline-${type}-2`} />

                    <Form.Check inline name="group1" label="Azul" type={type} id={`inline-${type}-4`} />

                    <Form.Check inline disabled name="group1" label="Cinza" type={type} id={`inline-${type}-3`} />

                    <Form.Check inline name="group1" label="Rosa" type={type} id={`inline-${type}-5`} />
                  </div>
                ))}
            </Form>

            <hr />

              <h6>Tamanho</h6>
                <Form.Select>
                  <option value={''}>Escolha um tamanho</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Form.Select>

                <hr />

              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Comprar
                </Button>
              </div>

          </Alert>
        </div>

        </div>

        Detalhes
    </div>
  )
}

export default Details