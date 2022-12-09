import React from 'react'
import styled from 'styled-components'
import yt1 from "../img/yt1.png"
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ExploreIcon from '@mui/icons-material/Explore';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1;
background-color: ${({theme}) => theme.bgLighter};
height:100vh;
color: ${({theme}) => theme.text};
position:sticky;
top:0;
`

const Wrapper = styled.div`
padding:20px 15px;

`

const Logo =styled.div`
display:flex;
font-weight:bold;

margin-bottom:1rem;

font-size:0.8rem;
gap:5px;
`

const Img = styled.img`
height: 1.5rem;


`
const Items = styled.div`
cursor:pointer;
display: flex;
gap: 10px;
align-items:center;
font-size: 1rem;
padding: 0.6rem 0;
height: 0.9rem;

&:hover{
  background-color:${({ theme}) => theme.soft} ;

}

`

const Hr = styled.hr`
margin: 0.5rem 0;
border:0.001rem solid ${({theme}) => theme.soft};;
`

const Login = styled.div`
font-size:0.9rem;
margin-bottom:0.5rem ;
`
const Button = styled.button`
background-color: transparent;
border: 1px solid skyblue;
color: skyblue;
padding: 0.5rem 1rem;
font-weight:bold;
cursor: pointer;

`

const Menu = ( {darkMode , setDarkMode}) => {




  return (

    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Logo>
          <Img src={yt1}/>
          YubeTube
          
        </Logo>
        </Link>
      
        <Items>
          <HomeIcon/>
          Home
        </Items>
        <Link to="trends" style={{ textDecoration :"none", color:"inherit"}}>
        <Items>
          <ExploreIcon/>
          Explore
        </Items>
        </Link>

        <Link to ="subscriptions" style={{textDecoration:"none", color:"inherit"}}>
        <Items>
          <SubscriptionsIcon/>
          Subscriptions
        </Items>
        </Link>
     
       
        <Hr/>
        <Items>
          <VideoLibraryIcon/>
          Library
        </Items>
        <Items>
          <HistoryIcon/>
          History
        </Items>
        <Hr/>
        <Login>
          Sign in to like videos, comment and subscribe.
        
        </Login>
        <Link to = "signin " style={{textDecoration:"none"}}>
        <Button>
            SIGN IN
          </Button>
        </Link>
      
        <Hr/>
        <Items>
          <MusicNoteIcon/>
          Music
        </Items>
        <Items>
          <SportsBaseballIcon/>
          Sports 
        </Items>
        <Items>
          <SportsEsportsIcon/>
          Gaming
        </Items>
        <Items>
          <LocalMoviesIcon/>
          Movies
        </Items>
        <Items>
          <NewspaperIcon/>
          News
        </Items>
        <Items>
          <LiveTvIcon/>
          Live
        </Items>
        <Hr/>
        <Items>
          <SettingsIcon/>
          Setting
        </Items>
        <Items>
          <ReportIcon/>
          Report
        </Items>
        <Items>
          <HelpIcon/>
          Help
        </Items>
        <Items onClick={()=> setDarkMode(!darkMode)}>
          <NightlightIcon/>
          {darkMode ? "Light" : "Dark"} Mode
        </Items>
      </Wrapper>

    </Container>
  

  )
}

export default Menu