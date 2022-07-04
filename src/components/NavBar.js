import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Container>
      <Link to="/home"><img src="./images/logo.svg" /></Link>
      <button>Login</button>

    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  top:0;
  left: 0;
  right:0;
  background-color: #090b13;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  img{
    margin-left: 30px;
    width:100px;
  }
  
  button{
    background-color: transparent;
    border:solid white;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color:white;
    width:100px;
    height: 40px;
    margin-right:30px;
  }
  @media screen and (max-width:768px){
      
  }
`