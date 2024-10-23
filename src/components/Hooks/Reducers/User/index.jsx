import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState:{
        userData : null,
        isAuthenticated : false
    },
    reducers:{
        login : (state, action) =>{
            state.userData = action.payload,
            state.isAuthenticated = true
        },
        logout : (state)=>{
            state.userData = null,
            state.isAuthenticated = false
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer