import {createSlice} from "@reduxjs/toolkit"

const consultSlice = createSlice({
    name: "user",
    initialState: {
        disease: "",
        precentage: 0
    },
    reducers: {
        consultYes:(state, action)=>{
            state.isFetching = true
        },
    }
})

export default consultSlice.reducer