import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-light">
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>Kerim ProShop <span className="mr-2">&copy;</span> {currentYear} All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer