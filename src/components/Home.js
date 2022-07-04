import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <div>
        <h1>Home Page</h1>
        <Link to="/login">Login Page</Link>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height:100vh;
  width: 100vw;
  div{
    margin-top: 100px;
  }
  h1{
    color: white;
  }
  
`
export default Home;
