import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addVideoAPI } from '../Services/allAPI'


function Add({setAddVideoResponse}) {
    const [invalidYoutubeUrl,setInvalidURL] = useState(false)
    const [videoDetails,setVideoDetails] = useState({
      caption:"" , imgURL:"" , youtubeURL:""
    })
    
    const [show, setShow] = useState(false);
    
    console.log(videoDetails);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getEmbedURL = (link)=>{
      if (link.includes("v=")) {
        let videoId = link.split("v=")[1].slice(0,11)
        console.log(videoId);
        setVideoDetails({...videoDetails,youtubeURL:`https://www.youtube.com/embed/${videoId}`})
        setInvalidURL(false)
      } else {
        setVideoDetails({...videoDetails,youtubeURL:""})
        setInvalidURL(true)
      }
    }
      
    const handleUpload = async() => {
      console.log("Inside handleUpload Function");
      // const {key1,key2,...} = object-name :object Destructuring
      const {caption, imgURL, youtubeURL} = videoDetails
      if (caption && imgURL && youtubeURL) {
        console.log("api call");
        try {
          const result = await addVideoAPI(videoDetails)
          console.log(result);
          if(result.status>=200 && result.status<300){
            console.log(result.data) 
            setAddVideoResponse(result.data)          //state value updating by state lifting method 
            setVideoDetails({caption:"" , imgURL:"" , youtubeURL:"" }) //now added bcoz of *        
            toast.success(`${result.data.caption} added to your collection !!`)
            handleClose()
          }else{
            toast.error(result.response.data)
          }
        } catch (err) {
          console.log(err)
        }
      } else {
        toast.warning("Please fill the form completely !")
      }
    }

  return (
    <>
      <div className="d-flex align-items-center">
         <h4>Upload New Videos</h4>
         <button onClick={handleShow} className='btn btn-primary ms-3 rounded-circle fw-bolder fs-3'>+</button>
      </div>

      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Video Details</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>Please fill the details</p>
            <div className='border rounded p-3'>
              <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3">
                <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="email" placeholder="Video Caption" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgURL:e.target.value})} type="email" placeholder="Image URL" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="YouTube URL" className="mb-3">
                <Form.Control onChange={e=>getEmbedURL(e.target.value)} type="email" placeholder="YouTube URL" />
              </FloatingLabel>
              {
                invalidYoutubeUrl &&  <div className="text-danger fw-bolder">Invalid Youtube Link !</div>
              }
            </div>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpload}>
              Upload
            </Button>
         </Modal.Footer>
       </Modal>
       <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Add