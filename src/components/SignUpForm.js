import styled from "styled-components"

export default function SignUpForm() {
    return (
        <Container>

            <Form>
                <h1>SignUp</h1>
                <hr />
                <label for="firstName">First Name</label>
                <input name="firstName" type="text" placeholder="First Name" />
                <label for="lastName">Last Name</label>
                <input name="lastName" type="text" placeholder="LastName" />
                <label for="email">Email ID</label>
                <input name="email" type="email" placeholder="Eamil ID" />
                <label for="password">Password</label>
                <input name="password" type="password" placeholder="Password" />
                <hr />
                <button type="submit">Login</button>
                <div><span>Already have an account ?</span><a href="/login"> Login</a></div>
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