import SearchIcon from '@mui/icons-material/Search';


import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'



const Container = styled.div`
position: sticky;
top:0;
background-color:${({theme}) => theme.bgLighter};
height: 4rem;
`
const Wrapper = styled.div`
display: flex;
align-items:center;
height:100%;
padding: 0 3rem;
justify-content:flex-end;
position: relative;



`
const Search = styled.div`
position: absolute;
margin: auto;
left:0;
right:0;
width:50%;
display: flex;
justify-content:space-between;
align-items:center;
border: 1px solid #ccc;
padding: 0.8rem;
border-radius:10px ;
color: ${({theme}) => theme.text};
cursor: pointer;

`
const Input = styled.input`
border: none;
background-color:transparent ;
padding: 0.2rem 2rem;
font-size: 1rem;
outline:none;


` 

const Button = styled.button`
background-color: transparent;
border: 1px solid skyblue;
color: skyblue;
padding: 0.5rem 1rem;
font-weight:bold;
cursor: pointer;



`

const User = styled.div`
`
const Avatar = styled.img``

const Navbar = () => {


  const { currentUser} = useSelector(state => state.user)

  return (
    <Container>
      <Wrapper>
        <Search>
          
          <Input placeholder='Search'/>
          <SearchIcon/>
        </Search>
      { currentUser ? <User>
        <Avatar/>
        <currentUser.name/>
      </User> : <Link to ="signin" style={{"textDecoration":"none"}}> 
        <Button>
          SIGN IN
        </Button>
        </Link>}
        
      </Wrapper>
    </Container>
    
     )
}

export default Navbar