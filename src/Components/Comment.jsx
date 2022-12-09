import React from 'react'
import styled from 'styled-components'
import Yube from "../img/yube1.jpg"

const Container =styled.div`
display: flex;
gap:1rem;
margin-top:2rem;
`
const Avatar = styled.img`
height: 2.5rem;
border-radius:50%;
`

const Detail = styled.div`
display: flex;
flex-direction:column ;
color: ${({ theme }) => theme.text}
`

const Name = styled.span`
font-size:1rem;
font-weight:500;
cursor:pointer;
`
const Date = styled.span`
font-size:0.8rem;
font-weight:500;
margin-left:0.5rem;
color:${({ theme}) => theme.textSoft}
`
const Text = styled.span``

const Comment = () => {
  return (
    <Container>
        <Avatar src={Yube}/>
        <Detail>
            <Name> Yube 
            <Date> 3 days ago</Date>
            </Name>
        
            <Text>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vero, doloremque iste in a esse eum exercitationem dolorum at eos  </Text>
        </Detail>
    </Container>
    
  )
}

export default Comment