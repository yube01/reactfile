import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
 //import Yube from "../img/yube.jpg"
//import Yube1 from "../img/yube1.jpg"
import {format} from "timeago.js"
import axios from 'axios'


const Container = styled.div`
width: ${(props)=> props.type !== "sm " && "300px"};
gap:0.5rem;

cursor: pointer;
margin-bottom: ${(props)=> props.type === "sm" ? "10px" : "45px"};
display: ${(props)=> props.type === "sm" && "flex"};
`

const Image = styled.img`
width: 100%;
height: ${(props)=> props.type === "sm" ? "100px" : "170px"};
background-color: #999 ;
flex:1;
`

const Details = styled.div`
display: ${(props)=> props.type !== "sm" && "flex"};
gap: 1rem;
flex:1;
margin-top: ${(props)=> props.type !== "sm" && "0.2rem"} ;
`


const ChannelImg = styled.img`
width: 2.5rem;
height: 2.5rem;
border-radius:50%;
background-color:#999 ;
display: ${(props)=> props.type === "sm" && "none"};

`

const Texts = styled.div`

`
const Title = styled.h1`
font-size: 15px;
font-weight: 500 ;
color: ${({ theme }) => theme.text};
margin-bottom:${(props)=> props.type !== "sm " && "0.2rem"} ;
`
const ChannelName = styled.h2`
font-size: 12px;
color: ${({ theme}) => theme.textSoft};
margin-bottom: 0.3rem ;
`
const Info = styled.div`

font-size: 12px;
color: ${({ theme}) => theme.textSoft};

`



const Card = ( {type, video}) => {

  const [ channel , setChannel] = useState({})

  useEffect (()=>{

    const fetchChannel = async ()=>{

      const res = await axios.get(`/users/find/${video.userId}`)

      setChannel(res.data)
    }
    fetchChannel()


  },[video.userId])

  return (

    <Link to ="/video/test" style={{textDecoration:"none"}}>

<Container type = {type}>
     <Image  type = {type}  src={video.imgUrl}/>
     <Details type ={type}>
     <ChannelImg type = {type} src={channel.img}/>
     <Texts type = {type}>
      <Title type ={type}>  {video.title} </Title>
     <ChannelName> {channel.name} </ChannelName>
    
     <Info>  {video.views} views -  {format(video.createdAt)} </Info>

     </Texts>

     </Details>
    

  
    </Container>
    
    </Link>
   

  )
}

export default Card

// npm add timeago.js for ago format in video