import { useEffect, useState } from "react"
import styled from "styled-components"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"


export default function SignUpForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const name = formData.firstName + " " + formData.lastName


    const signUp = async () => {
        try {
            const result = await createUserWithEmailAndPassword(auth, formData.email, formData.confirmPassword);
            await updateProfile(result.user, {
                displayName: name,
                photoURL: "./images/user.png"
            })
            navigate("/login")
            console.log(result.user)
        } catch (error) {
            alert(error.code)

        }

    }
    console.log("Sing In rerenderd")


    function handleChange(event) {

        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        setFormError(validate(formData));
        setIsSubmit(true);
    }


    const validate = (formData) => {
        const error = {};
        const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

        if (!formData.firstName) {
            error.firstName = "First Name Required !";
        }
        else if (regName.test(formData.firstName)) {
            error.firstName = "Not a valid first name!"
        }

        if (!formData.lastName) {
            error.lastName = "Last Name Required !";
        }
        else if (regName.test(formData.lastName)) {
            error.lastName = "Not a valid last name!";
        }

        if (!formData.email) {
            error.email = "Email is required";
        }
        else if (!regEmail.test(formData.email)) {
            error.email = "Not a valid Email!";
        }

        if (!formData.password) {
            error.password = "Password is required !";
        }
        else if (!regPassword.test(formData.password)) {
            error.password = "Not valid password format"
        }

        if (!formData.confirmPassword) {
            error.confirmPassword = "You need to confirm your password";
        }
        else if (formData.password !== formData.confirmPassword) {
            error.confirmPassword = "Please check the password and try again!"
        }

        return error;


    }

    useEffect(() => {
        if (Object.keys(formError).length === 0) {
            return
        }
    }, [formError])



    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* {Object.keys(formError).length === 0 && isSubmit ? <Success>Sign up successfull ! <br /><br /> Please log in to continue</Success> : <></>} */}
                {/* {errorMessage ? <span>{errorMessage}</span> : <></>} */}
                <h1>SignUp</h1>
                <hr />
                <label for="firstName">First Name</label>
                <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
                <span>{formError.firstName}</span>
                <label for="lastName">Last Name</label>
                <input name="lastName" type="text" placeholder="LastName" onChange={handleChange} value={formData.lastName} />
                <span>{formError.lastName}</span>
                <label for="email">Email ID</label>
                <input name="email" type="email" placeholder="Eamil ID" onChange={handleChange} value={formData.email} />
                <span>{formError.email}</span>
                <label for="password">Password</label>
                <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                <span>{formError.password}</span>
                {/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(formData.password) ? <Pass className="passSuccess">Password Valid!</Pass> : <Pass className="passError">Password must have a capital letter <br /> Password must have a digit <br /> Must be between 8-16 character</Pass>}
                <label for="password">Confirm Password</label>
                <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} value={formData.confirmPassword} />
                <span>{formError.confirmPassword}</span>
                <hr />
                <button type="submit" onClick={signUp}>Sign Up</button>
                <hr />

                <p>Already have an account ?</p>
                <a href="/login"> Login</a>
            </Form>

        </Container>
    )

}


const Container = styled.div`
    height:100vh;
    width: 100vw;
    margin-top: 100px;
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
    letter-spacing: 5px;
    background-color: #090b13;
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
        color: red;
        font-size:13px;
        letter-spacing: normal;
    }
    transition: all 0.2s ease-in-out;
    &:hover{
    background-color: white;
    color:black; 
    input,button{
        border: solid black
    }
  }
  .passError{
    color: red;
  }
  .passSuccess{
    color:green
  }
  @media screen and (max-width:768px){
    height: 75%;
    padding: 20px;
    margin-top: 50px;
  }
  
`
const Success = styled.p`
    color:green;
`




const Pass = styled.span``