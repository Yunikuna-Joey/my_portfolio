import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/github.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <img src={logo} alt="Logo" className="logo" />
                    </Col>

                    <Col className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}