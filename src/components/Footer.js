import {Container, Row, Col} from "react-bootstrap"
import { MailchimpForm} from "./MailchimpForm"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    {/* <MailchimpForm /> */}
                    <Col sm={6}>
                        <h1 className="brand">Sabrina's Portfolio</h1>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sabrinaxchen/" target="_blank">
                                <img src={navIcon1} />
                            </a>
                            <a href="https://www.facebook.com/xiangwen1212" target="_blank">
                                <img src={navIcon2} />
                            </a>
                            <a href="https://www.instagram.com/bribrina_c/" target="_blank">
                                <img src={navIcon3} />
                            </a>
                            <p>CopyRight 2022. All Right Reserved by Sabrina Chen</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}