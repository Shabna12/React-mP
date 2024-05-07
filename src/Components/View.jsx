import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from "../Services/allAPI";
import { Await } from 'react-router-dom';


function View({addVideoResponse,removeCategoryVideoResponse,setDeleteVideoCategoryResponse}) {
  const [deleteResponse,setDeleteResponse] = useState("")
  //component open aakumbol for api items to b here -- useEffect use cheyyanum
  const [allVideos,setAllVideos] = useState([])
  console.log(allVideos);

  useEffect(()=>{
    getAllVideos()
  },[addVideoResponse,deleteResponse,removeCategoryVideoResponse])

  const getAllVideos = async ()=>{
    try {
      const result = await getAllVideoAPI()
      console.log(result);
      if (result.status>=200 && result.status<300) {
        setAllVideos(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const dragOverView = (e)=>{
    e.preventDefault()
  }

  const handleCategoryVideo = async (e)=>{
    const {categoryId,videoDetails} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(categoryId,videoDetails);
    try {
      const {data} = await getSingleCategoryAPI(categoryId)
      console.log(data);
      const updatedCategoryVideoList = data.allVideos.filter(item=>item.id!==videoDetails.id) //filter used
      console.log(updatedCategoryVideoList);
      const {categoryName,id} = data
      const categoryResult = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryVideoList})
      setDeleteVideoCategoryResponse(categoryResult.data)
      await addVideoAPI(videoDetails)
      getAllVideos()
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <Row className='p-2' droppable={true} onDragOver={(e)=>dragOverView(e)} onDrop={(e)=>handleCategoryVideo(e)}>
       {
          allVideos.length>0?        // use map method to display array
          allVideos?.map(video=>(
            <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
              <VideoCard displayData={video} setDeleteResponse={setDeleteResponse} />
            </Col>
          ))
          :
          <div className='fw-bolder text-danger'>Nothing to display</div>
       }
      </Row>
    </>
  )
}

export default View