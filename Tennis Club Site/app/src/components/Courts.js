import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

import court1 from './images/court1.png'
import court2 from './images/court2.png'
import court3 from './images/court3.png'
import court4 from './images/court4.png'
import court5 from './images/court5.png'
import court6 from './images/court6.png'

import './courts.css'

const Courts = () => {
    const { t, i18n } = useTranslation();

        return(  
        <div className="container">      
            <br></br>
            <h1 className="center">{t("Courts.1")}</h1>
            <li style={{fontSize: "20px"}}> {t("Play with a beautiful scenery.1")}</li>
            <li style={{fontSize: "20px"}}> {t("Choose between grass, clay, and hard courts.1")}</li>
            <li style={{fontSize: "20px"}}> {t("We have plenty of courts to play on.1")}</li>
            <br></br>            
            <div className="courts">
                <Container>
                    <Row className="courts-image-1">
                        <Col>
                            <img src={court1}></img>
                            <figcaption style={{marginLeft: 140}}>Court 1</figcaption>
                        </Col>
                        <Col>
                            <img src={court2}></img>
                            <figcaption style={{marginLeft: 140}}>Court 2</figcaption>
                        </Col>
                        <Col>
                            <img src={court3}></img>
                            <figcaption style={{marginLeft: 140}}>Court 3</figcaption>
                        </Col>
                    </Row>
                    <Row className="courts-image-2">
                        <Col>
                            <img src={court4}></img>
                            <figcaption style={{marginLeft: 140}}>Court 4</figcaption>
                        </Col>
                        <Col>
                            <img src={court5}></img>
                            <figcaption style={{marginLeft: 140}}>Court 5</figcaption>
                        </Col>
                        <Col>
                            <img src={court6}></img>
                            <figcaption style={{marginLeft: 140}}>Court 6</figcaption>
                        </Col>
                    </Row>                    
                    <br></br>      
                </Container>
            </div>
        </div>
        
        )
    
}

export default Courts