import styled, { ThemeProvider } from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import "./App.css"
import { darkTheme, lightTheme } from "./Utlis/Theme";
import { useState } from "react";
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import SignIn from "./Pages/SignIn";

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install @mui/icons-material



const Container = styled.div`
display:flex;
background-color:${({theme}) => theme.bg}

`

const Main = styled.div`

flex:7;
`

const Wrapper = styled.div`
padding: 1rem 3rem;
`

function App() {


  const [ darkMode , setDarkMode] = useState(true)
  return (


    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>


    <div>
    <Container>
    <BrowserRouter>
    <Menu  darkMode ={darkMode} setDarkMode ={setDarkMode}/>
     <Main>
      <Navbar/>
      <Wrapper>
      <Routes>

      <Route path="/">
        <Route index element ={<Home type = "random"/>}/>
        <Route path="trends" element = { <Home type = "trend"/>}/>
        <Route path="subscriptions" element = {<Home type = "sub"/>}/>
        <Route path="signin" element ={<SignIn/>} />
        <Route path="video">
          <Route path=":id" element={<Video/>}/>
        </Route>
      </Route>
      </Routes>
      
      

      </Wrapper>
     </Main>
    </BrowserRouter>
 
    </Container>
  </div>
    
    
    
    </ThemeProvider>

  );
}

export default App;
