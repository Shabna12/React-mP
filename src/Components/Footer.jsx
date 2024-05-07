import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className='d-flex justify-content-between'>
        <div style={{width:'400px'}} className="intro">
          <h5> <i className="fa-solid fa-music me-2"></i> Media Player</h5>
          <p>
            Designed and built with all the love in the world by the Luminar Team with the help of our contributors.
          </p>
          <p>Code licensed LUMINAR, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none'}}>Watch History Page</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none'}} target='_blank'>React</a> <br />
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none'}} target='_blank'>React Bootstrap</a> <br />
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none'}} target='_blank'>React Router</a>

        </div>
        <div className="contact d-flex flex-column">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Enter your email here' type="text" className='form-control' />
            <button className='btn btn-info ms-1'> <i className='fa-solid fa-arrow-right'></i> </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" style={{textDecoration:'none'}} target='_blank'> <i className='fa-brands fa-twitter'></i> </a>
            <a href="" style={{textDecoration:'none'}} target='_blank'> <i className='fa-brands fa-facebook'></i> </a>
            <a href="" style={{textDecoration:'none'}} target='_blank'> <i className='fa-brands fa-linkedin'></i> </a>
            <a href="" style={{textDecoration:'none'}} target='_blank'> <i className='fa-brands fa-instagram'></i> </a>
            <a href="" style={{textDecoration:'none'}} target='_blank'> <i className='fa-brands fa-github'></i> </a>
            <a href="" style={{textDecoration:'none'}} target='_blank'> <i className='fa-solid fa-phone'></i> </a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright © Jan Batch, 2024 MEDIA PLAYER built with REACT.</p>
    </div>
  )
}

export default Footer