import { useEffect, useState } from "react"
import styled from "styled-components"
import { auth, provider } from "../firebase"
import { useDispatch } from "react-redux";
import { setUserLoginDetails, setUserSingOutDetails } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";


export default function LoginForm() {

    //here we create all the required states 
    const [formData, setFormData] = useState({ email: "", password: "" }) //this state stores the incomming value form the form on every keystroke
    const [formErrors, setFormErrors] = useState({}); //this state is for error handling 
    const [isSubmit, setIsSubmit] = useState(false); //this state is to check if all the validations have worked or not 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
        } catch (error) {
            alert(error.message);
        }
    }
    const googleLogin = async () => {
        try {
            await signInWithRedirect(auth, provider)

        } catch (error) {
            console.log(error.code)
        }
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                dispatch(setUserLoginDetails({
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photo: currentUser.photoURL
                }))
                console.log("User Loged in with all details")
                navigate("/home")
            }
            else {
                dispatch(setUserSingOutDetails())
                console.log("Logedout")

            }
            console.log("rerendered")
        })
    }, [])




    function handleChange(event) {
        setFormData(prevData => {
            const { name, value } = event.target;
            return {
                ...prevData,
                [name]: value  // computed syntax
            }
        })
    }

    //we handeled submit function for our form 
    function handleSubmit(event) {
        event.preventDefault();
        setFormErrors(validate(formData)); //checked for validation and if any error occurs we store it in form error state
        setIsSubmit(true) //and set the form sbubmit to true only if our form is valid
    }

    //validator function
    const validate = (value) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!value.email) {
            errors.email = "Email is required!";
        }
        else if (!regex.test(formData.email)) {
            errors.email = "Not a valid email!"
        }

        if (!value.password) {
            errors.password = "Password is required!";
        }
        else if (value.password.length < 4) {
            errors.password = "Password is less than 4 characters !"
        }

        return errors;
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0) {
            return
        }
    }, [formErrors])


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* {Object.keys(formErrors).length === 0 && isSubmit ? <Success>Log in successfull !</Success> : <></>} */}
                <h1>Login</h1>
                <hr />
                <label for="email">Email ID</label>
                <input name="email" type="text" placeholder="Eamil ID" onChange={handleChange} value={formData.email} />
                <span>{formErrors.email}</span>
                <label for="password">Password</label>
                <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                <span>{formErrors.password}</span>
                <hr />
                <button type="submit" onClick={login}>Login</button>
                <hr />
                <LoginButton onClick={googleLogin}><img src="./images/google.png" />Google Login</LoginButton>
                <div><p>Don't have an account ?</p></div>
                <a href="/signup">Sign Up</a>
            </Form>

        </Container>
    )

}



const Container = styled.div`
margin-top: 100px;
    height:100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./images/login-background.jpg");
  background-position: center, center;
  background-size: cover;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    border: solid white;
    padding:30px;
    letter-spacing: 2px;
    
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
    span{
        font-size: 13px;
        color:red;
    }
    transition: all 0.2s ease-in-out;
    &:hover{
    background-color: white;
    color:black; 
    input{
        border: solid black
    }
    button{
        border: solid black;
    }
  }
  
`
const LoginButton = styled.a`
  display: flex;
  align-items: center;
   width: 300px;
  height: 65px;
  justify-content: space-evenly;
  gap: 20px;
  color:rgb(249,249,249);
  background-color: #4285f4;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
  border: 1px solid white;
  border-radius: 5px;
  padding:16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
`

const Success = styled.p`
    color:green;
`