import React from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../firebase";


export default function NavBar() {

  return (
    <Container>
      <a href="/home"><img src="./images/logo.svg" alt="logo" /></a>
      <NavMenu>
        <a href="/home"><img src="./images/home-icon.svg" alt="icon" /><span>Home</span></a>
        <a href="/home"><img src="./images/search-icon.svg" alt="icon" /><span>search</span></a>
        <a href="/home"><img src="./images/watchlist-icon.svg" alt="icon" /><span>watchlist</span></a>
        <a href="/home"><img src="./images/original-icon.svg" alt="icon" /><span>orignal</span></a>
        <a href="/home"><img src="./images/movie-icon.svg" alt="icon" /><span>movie</span></a>
        <a href="/home"><img src="./images/series-icon.svg" alt="icon" /><span>series</span></a>
      </NavMenu>
      <LoginButton onClick={signInWithGoogle}>Login</LoginButton>
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
  gap:10px;
  width: 100vw;
  img{
    margin-left: 30px;
    width:100px;
    
  }
  @media screen and (max-width:768px){
      
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: auto;
  a{
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none ;
    text-transform: uppercase;
    color: rgb(249,249,249);
  }
  img{
    width:20px;
  }
  span{
    color:rgb(249,249,249);
    font-size: 15px;
    letter-spacing: 2px;
   
  }
  @media screen and (max-width:768px){
    display: none;
  }
  
`

const LoginButton = styled.a`
  text-align: center;
  color:rgb(249,249,249);
  background-color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
  border: 1px solid white;
  border-radius: 5px;
  padding:16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover{
    background-color: white;
    color:black;
  }
`

