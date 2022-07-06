import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setUserSingOutDetails: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})
export default userSlice.reducer;
export const { setUserLoginDetails, setUserSingOutDetails } = userSlice.actions;

//now to use the stored login credentials we store them in variables and exprt thme
//for further processing

export const selectUserName = (state) => state.user.name; //here state reffers to current state of store and is used with useSelector hookuser.
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
