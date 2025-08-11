import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Barra = () => {
  const location = useLocation()

  return (
    <Navbar bg='primary' variant='dark' className='mb-4'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Hooks en React
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link 
            as={Link} 
            to="/usuario"
            className={location.pathname === '/usuario' ? 'active fw-bold' : ''}
          >
            Usuario
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/productos"
            className={location.pathname === '/productos' ? 'active fw-bold' : ''}
          >
            Todos
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <ThemeToggle />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Barra