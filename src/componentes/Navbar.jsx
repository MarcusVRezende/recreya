import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logoNavbar.png';
import '../styles/Navbar.css';
import { Phone } from 'lucide-react';

const MyNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`navbar-recreya py-3 ${scrolled ? 'navbar-scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo Recreya"
                        className="logo-main"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto align-items-center">
                        <Nav.Link href="#home" className="nav-link-custom">Início</Nav.Link>
                        <Nav.Link href="#sobre" className="nav-link-custom">Sobre</Nav.Link>
                        <Nav.Link href="#servicos" className="nav-link-custom">Serviços</Nav.Link>
                        <Nav.Link href="#contato" className="nav-link-custom">Contato</Nav.Link>
                    </Nav>


                    <div>
                        <a href="https://api.whatsapp.com/message/Q6PAXQS4V6E4P1?autoload=1&app_absent=0&utm_source=ig" target="_blank" className="btn-fale-conosco">
                            <Phone size={18} strokeWidth={2.5} />
                            Fale Conosco
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;