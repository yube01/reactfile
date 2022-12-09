
import React from 'react'

import styled from 'styled-components'
// import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'


const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:4rem;
color: ${({theme})=> theme.text};
flex-direction:column ;
`

const Wrapper = styled.div`
display: flex;
flex-direction:column ;
align-items:center;
border: 2px solid ${({ theme })=> theme.bgLighter};
border-radius:1rem;
padding: 0.5rem 5rem;
gap:0.5rem;
`

const Title = styled.h1`
font-size:1.5rem;
`
const SubTitle = styled.h2`
font-size:1rem;

`
const Input = styled.input`
background: transparent;
border: 1px solid ${({ theme})=> theme.bgLighter};
color:${({ theme})=> theme.text};
outline: none;
padding:0.5rem;
width: 100%;
font-size:1rem;
font-weight:500;
border-radius:10px;

`
const Button = styled.button`
padding:0.5rem 3rem;
font-weight:500;
font-size:1rem;
border-radius:10px;
cursor: pointer;
border: 1px solid ${({ theme})=> theme.text};
`
const More = styled.div`
display:flex;
gap:7rem;
margin-top:0.5rem
cursor: pointer;
`
const Links =styled.div``
const Link = styled.span`
margin-left:5px;
cursor: pointer;
`

const SignIn = () => {


 

  return (
    <Container>
    <Wrapper>

    <Title>
    Sign In</Title>
    <SubTitle> to login into Yube Tube</SubTitle>
    <Input placeholder='Username' />
    <Input type="password" placeholder='Password' />
    <Button > Sign in </Button>
    <Title> Or </Title>
    <SubTitle> to login into Yube Tube</SubTitle>
    <Input placeholder='Username' />
    <Input type="email" placeholder='Email' /> 
    <Input type="password" placeholder='Password' />
    <Button> Sign up </Button>
    </Wrapper>
    <More>
      English (USA)
      <Links>
        <Link> Help </Link>
        <Link> Privacy </Link>
        <Link> Terms </Link>
      
      </Links>
    </More>
    </Container>
  )
}

export default SignIn