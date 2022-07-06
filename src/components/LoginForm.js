import { useState } from "react"
import styled from "styled-components"

export default function LoginForm() {

    const [formData, setFormData] = useState({ email: "", password: "" })

    function handleChange(event) {
        setFormData(prevData => {
            const { name, value } = event.target;
            return {
                ...prevData,
                [name]: value  // computed syntax
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <hr />
                <label for="email">Email ID</label>
                <input name="email" type="email" placeholder="Eamil ID" onChange={handleChange} value={formData.email} />
                <label for="password">Password</label>
                <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                <hr />
                <button type="submit">Login</button>
                <div><span>Don't have an account ?</span><a href="/signup"> SignUp</a></div>
            </Form>

        </Container>
    )

}


const Container = styled.div`
    height:100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    border: solid white;
    padding:30px;
    input,button{
        text-indent: 5px;
        width: 300px;
        height: 40px;
        border-radius: 5px;
        border: none;
    }
    a{
        text-decoration: none;
        
    }
    transition: all 0.2s ease-in-out;
    &:hover{
    background-color: white;
    color:black; 
    input,button{
        border: solid black
    }
  }
  
`
const SignUp = styled.a``