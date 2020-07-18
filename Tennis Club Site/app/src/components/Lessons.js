import React from 'react'
import {Alert} from 'react-bootstrap'
import { faExclamationCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next';

import forehand from './images/forehand.png'
import backhand from './images/backhand.png'
import serve from './images/serve.png'
import volley from './images/volley.png'
import './lessons.css'

const Lessons = () => {

    const { t, i18n } = useTranslation();

    return(
        <div className="container">
            <br></br>
            <h1 className="center">{t("Lessons.1")}</h1>
            <Alert variant="primary"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> {t("Please note that 1 star difficulty is the easiest and 5 star is the hardest difficulty.1")}</Alert>
            <br></br>
            <div className="lessons">
                <h4 className="center">{t("Forehand.1")}</h4>
                <img src={forehand}></img>
                <br></br>
                <div className="rating center">
                    <span>{t("Difficulty Rating.1")}</span>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <br></br>
                <p style={{fontSize: "20px"}} className="center">{t("Learn the most fundamental and important shot in the game!.1")}</p>
            </div>
            <br></br>
            <div className="lessons">
                <h4 className="center">{t("Backhand.1")}</h4>
                <img src={backhand}></img>
                <br></br>
                <div className="rating center">
                    <span>{t("Difficulty Rating.1")}</span>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <br></br>                
                <p style={{fontSize: "20px"}} className="center">{t("We will teach you the beautiful one handed backhand!.1")}</p>
            </div>
            <br></br>
            <div className="lessons">
                <h4 className="center">{t("Serve.1")}</h4>
                <img src={serve}></img>
                <br></br>
                <div className="rating center">
                    <span>{t("Difficulty Rating.1")}</span>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <br></br>                   
                <p style={{fontSize: "20px"}} className="center">{t("Using our serving technique, beat your opponents without breaking a sweat!.1")}</p>
            </div>
            <br></br>
            <div className="lessons">
                <h4 className="center">{t("Volley.1")}</h4>
                <img src={volley}></img>
                <br></br>
                <div className="rating center">
                    <span>{t("Difficulty Rating.1")}</span>
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon className="checked" icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <br></br>                   
                <p style={{fontSize: "20px"}} className="center">{t("Dominate opponents at the net!.1")}</p>
            </div>
        </div>
    )
}

export default Lessons