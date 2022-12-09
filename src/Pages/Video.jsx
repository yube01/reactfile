import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Yube from "../img/yube1.jpg"
import Comments from '../Components/Comments';
import Comment from '../Components/Comment';

import Card from "../Components/Card"

const Container = styled.div`
  display:flex;
  gap: 2rem;
  
 

`
const VideoWrapper = styled.div`

`

const Content = styled.div`
 flex:5;
`

const Recommendations = styled.div`
 flex:2;
 
`

const Title = styled.h1`
  color:${({ theme }) => theme.text}
  

`
const Details = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

`

const Info = styled.span`
  
  color:${({ theme }) => theme.textSoft}
`


const Button = styled.button`
display:flex;
align-items:center;
border:none;
gap:0.3rem;
background-color:${({ theme }) => theme.bg};
color:${({ theme }) => theme.text};
cursor:pointer;
`

const Buttons = styled.button`
display:flex;
gap:0.8rem;
border:none;
background-color:${({ theme }) => theme.bg}
`

const Hr = styled.hr`
margin: 0.5rem 0;
border:0.001rem solid ${({theme}) => theme.soft};;
`

const Channel = styled.div`
display:flex;
justify-content:space-between;



`
const ChannelInfo = styled.div`
  
display:flex;
gap: 1rem;


`
const Subscribe = styled.button`
cursor:pointer;
background-color: #cc1a00;
color:white;
height:max-content;
border:none;
padding:0.7rem;  
border-radius:2rem;
font-weight:500;
`
const ChannelName = styled.span`
font-size:1.1rem;
font-weight:500;
color:${({ theme }) => theme.textSoft}
`

const Image = styled.img`
height:2.5rem;
border-radius:50%;
cursor:pointer;

`
const ChannelDetail = styled.span`
display:flex;
flex-direction:column;
color:${({ theme }) => theme.text}
`
const Description = styled.p`
margin-top:1rem;
font-size:0.9rem;
`

const ChannelCounter = styled.span`
font-size:0.8rem;
margin-top: 0.2rem;
`


const Video = () => {
  return (
   <Container>
    <Content>
      <VideoWrapper>
      

      </VideoWrapper>

      <Title>
        Testing Youtube Title
      </Title>
      <Details>
        <Info>
          234,897 views - 12 Feb,2014
        </Info>
        <Buttons>
        <Button>
        <ThumbUpIcon/> 324

        </Button>
        <Button>
        <ThumbDownIcon/>  Dislike

        </Button>
        <Button>
        <ShareIcon/>  Share

        </Button>
        <Button>
        <SaveAltIcon/> Save

        </Button>
         
        </Buttons>
        
      
      </Details>
      <Hr/>
      <Channel>
      <ChannelInfo>
      <Image src={Yube}/>
      <ChannelDetail>

      <ChannelName> Yube </ChannelName>
      <ChannelCounter> 376K Subscribers </ChannelCounter>
      <Description>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero, doloremque iste in a esse eum exercitationem dolorum at eos distinctio autem ullam explicabo porro odio accusantium corporis quasi facere!
      </Description>
      
      </ChannelDetail>

      </ChannelInfo>

      <Subscribe>
      Subscribe
      </Subscribe>
      </Channel>
      <Hr/>
      <Comments/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
   
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
 
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>

      

    </Content>
    <Recommendations>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    <Card type="sm"/>
    </Recommendations>

   </Container>
  )
}

export default Video