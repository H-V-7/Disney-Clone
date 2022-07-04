import React from "react";

import styled from "styled-components";

export default function Login(props) {

  return (
    <Content>
      <CTA>
        <img src="./images/cta-logo-one.svg" alt="online available" />
        <Button>GET ALL HERE</Button>
        <p>
          Get Premier Access to New Release for an additional fee with a Disney+
          subscription. Hurry Up The Price Of Disney+ and the Disney Bundel will
          increase by $1
        </p>
        <div>
          <img src="./images/cta-logo-two.png" className="cta-logo-two" alt="Partner logo" />
        </div>
      </CTA>
    </Content>
  );
}

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
  background-image: url("./images/login-background.jpg");
  background-position: center, center;
  background-size: cover;
`
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  row-gap: 10%;
  width: 50%;
  height: 50%;
  align-items: center;
  opacity: 85%;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  p{
    
    font-weight:bold;
    word-spacing: 5px;
    letter-spacing: 2px;
    
    text-align: center;
    @media only screen and (max-width:768px){
     
    }
  }
  .cta-logo-two {
    width: 100%;
    height: 100%;
  }
`

const Button = styled.button`
  width: 100%;
  min-height: 15%;
  border-radius: 10px;
  text-align: center;
  color:white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  background-color: rgb(36,160,237);
  cursor: pointer;
  :hover{
    background-color: #0483ee;
    
  }
`;