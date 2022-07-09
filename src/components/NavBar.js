import styled from "styled-components";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setUserSingOutDetails } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";




export default function NavBar() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate()
  console.log(userName)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUserLoginDetails({
          name: currentUser.displayName,
          photo: currentUser.photoURL,

        }))
        console.log("User Loged in with all details")

      }
      else {
        dispatch(setUserSingOutDetails())
        console.log("Logedout")
      }
    })
  }, [])


  const logOut = () => {
    signOut(auth);
    navigate("/")
  }



  return (
    <Container>
      <img src="./images/logo.svg" alt="logo" />
      {
        userName ?
          <>
            <NavMenu>
              <a href="/home"><img src="./images/home-icon.svg" alt="icon" /><span>Home</span></a>
              <a href="/home"><img src="./images/search-icon.svg" alt="icon" /><span>search</span></a>
              <a href="/home"><img src="./images/watchlist-icon.svg" alt="icon" /><span>watchlist</span></a>
              <a href="/home"><img src="./images/original-icon.svg" alt="icon" /><span>orignal</span></a>
              <a href="/home"><img src="./images/movie-icon.svg" alt="icon" /><span>movie</span></a>
              <a href="/home"><img src="./images/series-icon.svg" alt="icon" /><span>series</span></a>
            </NavMenu>
            <User>
              <UserName>{userName}</UserName>
              <LogOutButton onClick={logOut}>LogOut</LogOutButton>
              <UserImg src={userPhoto} alt={userName} />
            </User>
          </>
          :
          <></>
      }

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


const UserImg = styled.img`
  
  height:100px;
  width:100px;
  border-radius: 500px;
`
const LogOutButton = styled.button`
  height:50px;
  width: 100px;
  background-color: transparent;
  color: rgb(249,249,249);
  border: solid rgb(249,249,249);;
  ;
`
const User = styled.div`
    display: flex;
    margin-right:25px;
    align-items: center;
    justify-content: center;
`
const UserName = styled.span`
  margin: 25px;
`