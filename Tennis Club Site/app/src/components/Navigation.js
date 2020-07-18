import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

const Navigation = () => {

  const { t, i18n } = useTranslation();

    return(
        <Navbar bg="primary" expand="lg">
        <Navbar.Brand>{t("OTTAWA'S TENNIS CLUB.1")}</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">{t("Home.1")}</Nav.Link>
            <Nav.Link as={Link} to="/courts">{t("Courts.1")}</Nav.Link>
            <Nav.Link as={Link} to="/lessons">{t("Lessons.1")}</Nav.Link>
            <Nav.Link as={Link} to="/booking">{t("Booking.1")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation