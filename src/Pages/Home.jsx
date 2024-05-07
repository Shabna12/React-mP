import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {
  const [addVideoResponse,setAddVideoResponse] = useState("")    //state lifting process
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")

  const [deleteVideoCategoryResponse,setDeleteVideoCategoryResponse] = useState("")

  return (
    <>
      <div className="container my-5 d-flex justify-content-between">  
        <Add setAddVideoResponse={setAddVideoResponse} />          
        <Link to={'/history'}>Watch History</Link>
      </div> 
      <div className="container-fluid my-5 row">
        <div className="col-lg-6 p-2">
         <h3>All Videos</h3>
         <View setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} addVideoResponse={addVideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse}/>       
        </div>
        <div className="col-lg-6 p-2">
         <Category deleteVideoCategoryResponse={deleteVideoCategoryResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
       </div>
      </div>
    </>
  )
}

export default Home