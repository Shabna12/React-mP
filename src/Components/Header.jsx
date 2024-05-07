import React from 'react'
import { Navbar,Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'>
          <Navbar.Brand className='fs-3'>
           <i className="fa-solid fa-music me-2"></i>
            Media Player
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header