import React, {Suspense} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {withTranslation, Trans} from 'react-i18next';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./booking.css"

const phoneRegex = RegExp(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)

/*const formValid = ({formErrors, ...rest}) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
}*/



function message(){
    return alert("Your form has been submited, Thank you!")
}

class Booking extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          fName: null,
          lName: null,
          phone: null,
          formErrors: {
            fName: "",
            lName: "",
            phone: "",
          }
        };
      }    

    handleChange = e => {

        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case 'fName':
                formErrors.fName = 
                    value.length > 0 
                        ? ""
                        : "Please fill out the first name field"
                break;
            case 'lName':
                formErrors.lName = 
                    value.length > 0 
                        ? ""
                        : "Please fill out the last name field"
                break; 
            case 'phone':
                formErrors.phone = 
                    phoneRegex.test(value) 
                        ? ""
                        : "Please enter a valid phone number XXX-XXX-XXXX";    
                break;                              
        }

        this.setState({formErrors, [name]:value}, () => console.log(this.state))

    }


    render() {

        const {t} = this.props;

        const {formErrors} = this.state;

        return(
            <div className="container">
                <br></br>
                <h1 className="center">{t("Booking.1")}</h1>
                <br></br>
                <Alert variant="primary"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> {t("Please fill out the first name, last name, and phone fields.1")}</Alert>
                <Alert variant="primary"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> {t("If you want to play a game, select None as a lesson option.1")}</Alert>                
                <br></br>
                <Form>
                    <Form.Group controlId="formFirstName">
                        <Form.Label>{t("First Name.1")}</Form.Label>
                        <Form.Control name="fName" placeholder={t("First Name.1")} onChange={this.handleChange}/>
                        {formErrors.fName.length>0 && (
                            <span className="errorMessage"><Trans i18nKey="Please fill out the first name field.1">{formErrors.fName}</Trans></span>
                        )} 
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>{t("Last Name.1")}</Form.Label>
                        <Form.Control name="lName" placeholder={t("Last Name.1")} onChange={this.handleChange}/>
                    </Form.Group>
                    {formErrors.lName.length>0 && (
                        <span className="errorMessage"><Trans i18nKey="Please fill out the last name field.1">{formErrors.lName}</Trans></span>
                    )}
                    <Form.Group controlId="formPhone">
                        <Form.Label>{t("Phone.1")}</Form.Label>
                        <Form.Control name="phone" onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                            {t("Just to contact you once you've signed up!.1")}
                        </Form.Text>
                    </Form.Group>  
                    {formErrors.phone.length>0 && (
                        <span className="errorMessage"><Trans i18nKey="Please enter a valid phone number XXX-XXX-XXXX.1">{formErrors.phone}</Trans></span>
                    )}              
                    <Form.Group controlId="formCourt">
                        <Form.Label>{t("Choose a Court.1")}</Form.Label>
                        <Form.Control name="courtNumber" as="select">
                            <option>Court 1</option>
                            <option>Court 2</option>
                            <option>Court 3</option>
                            <option>Court 4</option>
                            <option>Court 5</option>
                            <option>Court 6</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formLesson">
                        <Form.Label>{t("Choose a Lesson.1")}</Form.Label>
                        <Form.Control name="lesson" as="select">
                            <option>{t("None.1")}</option>
                            <option>{t("Forehand.1")}</option>
                            <option>{t("Backhand.1")}</option>
                            <option>{t("Serve.1")}</option>
                            <option>{t("Volley.1")}</option>
                        </Form.Control>
                    </Form.Group> 
                    <Form.Group controlId="formLesson">
                        <Form.Label>{t("Choose an Instructor.1")}</Form.Label>
                        <Form.Control name="instructor" as="select">
                            <option>Jamal</option>
                            <option>Kobe</option>
                            <option>Ray</option>
                        </Form.Control>
                    </Form.Group>                 
                    <Button type="submit" onClick={message}>{t("Submit.1")}</Button>  
                </Form>
            </div>
        )
    }
}

const MyComponent = withTranslation()(Booking)

export default function App(){
    return(
        <Suspense fallback="loading">
            <MyComponent />
        </Suspense>
    );
}
