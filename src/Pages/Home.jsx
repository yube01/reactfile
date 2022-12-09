import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
import axios from "axios"

const Container = styled.div`
display: flex;
justify-content:space-between;
flex-wrap: wrap;

`

const Home = ({type}) => {


  const [ videos , setVideos] = useState([])

  //  npm add axios package
  useEffect(() =>{

    const  fetchVideos = async ()=>{
      //adding type function 
      const res = await axios.get(`/videos/${type}`)
      setVideos(res.data)
    }

    //asyn can't be used inside useeffect
    fetchVideos()
  },[type])

  return (



    <Container>
      {videos.map((video)=>(
                <Card key={video._id} video={video}/>
      ))}
  
        
    </Container>
  )
}

export default Home