import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <div> 
            <Navbar bg="light" data-bs-theme="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Recreya</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Início</Nav.Link>
                            <Nav.Link href="#servicos">Serviços</Nav.Link>
                            <Nav.Link href="#contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <nav className="bg-red-500 text-white p-4">
                <h1>TESTE TAILWIND</h1>
            </nav>
        </div>
    )
}

export default MyNavbar;