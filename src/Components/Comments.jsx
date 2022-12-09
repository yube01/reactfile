import Yube from "../img/yube1.jpg"
import React from 'react'
import styled from 'styled-components'




const Container = styled.div`
`
const NewComment = styled.div`
display: flex;
gap:1rem;
`
const Avatar = styled.img`
height: 3rem;
border-radius:50%;
`
const Input = styled.input`
border:none;
outline:none;
border-bottom:1px solid ${({ theme}) => theme.soft};
background: transparent;
color: ${({ theme})=> theme.text};
width:100%;
padding:1rem 0;
font-size:1rem;

`

const Comment = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src={Yube}/>
            <Input placeholder=' Add a comment '/>

        </NewComment>

    </Container>
  
  )
}

export default Comment