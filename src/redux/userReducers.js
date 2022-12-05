import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        message: "",
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
            state.error = false
        },
        loginFailure:(state, action)=>{
            state.message = action.payload
            state.isFetching = false
            state.error = true
        },
        logout:(state)=>{
            state.isFetching = false
            state.currentUser = null
            state.error = false
        } ,
        register:(state, action) => {
            state.currentUser = action.payload
            state.isFetching = false
            state.error = false
        }
    }
})

export const {loginStart, loginSuccess, loginFailure, logout} = userSlice.actions
export default userSlice.reducer