import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

import logo from './images/logo.png'
import jamal from './images/jamal.png'
import ray from './images/ray.png'
import kobe from './images/kobe.png'
import './home.css'

const Home = () => {
    const { t, i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    return(
        <div className="container">
            <br></br>
            <h1 className="center">{t("OTTAWA'S TENNIS CLUB.1")}</h1>
            <img src={logo} className="logo"></img>
            <br></br>
            <p style={{fontSize: "20px"}} className="center">{t("Welcome to Ottawa's #1 Tennis Club.1")}</p>
            <li style={{fontSize: "35px"}} className="center"> {t("Learn the fundamental tennis shots.1")}</li>
            <li style={{fontSize: "35px"}} className="center"> {t("Get top end coaching from our instructors.1")}</li>
            <li style={{fontSize: "35px"}} className="center"> {t("Play on our beautfiul tennis courts.1")}</li>
            <br></br>
            <div className="instructor">
                <h2 className="center">{t("Instructors.1")}</h2>
                <br></br>
                <p style={{fontSize: "20px"}} className="center">{t("Meet our world-renowned instructors!.1")}</p>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={jamal} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Jamal</Card.Title>
                                    <Card.Text>
                                        <li>{t("20+ years of experience.1")}</li>
                                        <li>{t("Specializes in Serving.1")}</li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem', height: '24rem' }}>
                                <Card.Img variant="top" src={ray} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Ray</Card.Title>
                                    <Card.Text>
                                        <li>{t("5 year tennis professional.1")}</li>
                                        <li>{t("Specializes in Forehand.1")}</li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={kobe} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>Kobe</Card.Title>
                                    <Card.Text>
                                        <li>{t("8 years of experience.1")}</li>
                                        <li>{t("Specializes in Backhand.1")}</li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="translation">
                <p>{t("Choose a language.1")}</p>
                <Button onClick={() => handleClick("en")}>English</Button>
                <div class="divider"/>
                <Button onClick={() => handleClick("fr")}>French</Button>
            </div>
        </div>
    )
}

export default Home