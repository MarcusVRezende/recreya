import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logoNavbar.png';
import icone3 from '../assets/icone3.png';
import '../styles/Navbar.css'; // Importando o estilo

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="navbar-recreya py-3">
            <Container>
                
                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                    <img
                        src={icone3}
                        alt="Ícone Recreya"
                        className="h-16 w-auto" 
                    />
                    <img
                        src={logo}
                        alt="Logo Recreya"
                        className="h-10 w-auto mt-2" 
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="mx-auto align-items-center">
                        <Nav.Link href="#home" className="nav-link-custom active">Início</Nav.Link>
                        <Nav.Link href="#sobre" className="nav-link-custom">Sobre</Nav.Link>
                        <Nav.Link href="#servicos" className="nav-link-custom">Serviços</Nav.Link>
                        <Nav.Link href="#contato" className="nav-link-custom">Contato</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center mt-4 mt-lg-0">
                        <a href="#fale-conosco" className="btn-fale-conosco">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            Fale Conosco
                        </a>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;