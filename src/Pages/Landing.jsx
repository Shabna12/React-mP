import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.gif'
import settingImg from '../assets/feature1.png'
import categoryImg from '../assets/feature2.png'
import historyImg from '../assets/feature3.jpg'
import { Card } from 'react-bootstrap'

function Landing() {
  return (
    <>
     <div className="landingsection container">
       <div className="row align-items-center my-5">
         <div className="col-lg-6">
           <h3>Welcome to <span className='text-primary'>Media Player</span></h3>
           <p className='mt-5' style={{textAlign:'justify'}}> Media Player App will allow user to add or remove their uploaded videos from youTube and also arrange them in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let's start exploring  our site !!  </p>
           <Link to={'/home'} className='btn btn-primary mt-3'>Get Started</Link>
         </div>
         <div className="col-lg-6">
           <img height={400} width={450} className='ms-4' src={landingImg} alt="landing page" />
         </div>
       </div>
       {/* features */} 
       <div className="features my-5">
        <h3>Features</h3> <br />
        <div className="row">
          <div className="col-lg-4">
           <Card style={{ width: '22em', height:'400px' }}>
             <Card.Img variant="top" style={{height:'250px'}} className='p-2' src={settingImg} />
             <Card.Body>
               <Card.Title>Managing Videos</Card.Title>
               <Card.Text>
                 Users can upload, view and remove the videos
               </Card.Text>
             </Card.Body>
           </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '22em', height:'400px' }}>
             <Card.Img variant="top" style={{height:'250px'}}  className='p-2' src={categoryImg} />
             <Card.Body>
               <Card.Title>Categorise Videos</Card.Title>
               <Card.Text>
                 Users can upload, view and remove the videos
               </Card.Text>
             </Card.Body>
           </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '22em', height:'400px' }}>
             <Card.Img variant="top" style={{height:'250px'}}  className='p-2' src={historyImg} />
             <Card.Body>
               <Card.Title>Managing History</Card.Title>
               <Card.Text>
                 Users can upload, view and remove the videos
               </Card.Text>
             </Card.Body>
           </Card>
          </div>
        </div>
       </div>
       {/* section */}
       <div className="my-5 row border rounded p-3">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast & Powerful !!</h3>
          <p style={{textAlign:'justify'}}>
            <span className='fs-3'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates architecto dolorum aperiam consectetur dolore facere excepturi, earum obcaecati.
          </p>
          <p style={{textAlign:'justify'}}>
            <span className='fs-3'>Categorise Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates architecto dolorum aperiam consectetur dolore facere excepturi, earum obcaecati.
          </p>
          <p style={{textAlign:'justify'}}>
            <span className='fs-3'>Manage History</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates architecto dolorum aperiam consectetur dolore facere excepturi, earum obcaecati.
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/rR_2ti4l3nM" title="Premalu Official Trailer | Naslen | Mamitha | Girish AD | Bhavana Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
       </div>
     </div>
    </>
  )
}

export default Landing