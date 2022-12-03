import {createSlice} from "@reduxjs/toolkit"

const consultSlice = createSlice({
    name: "user",
    initialState: {
        disease: "",
        nextQuestion: "",
        precentage: 0
        
    },
    reducers: {
        consultYes:(state, action)=>{
            state.disease = action.payload.disease
            state.nextQuestion = action.payload.nextQuestion
            state.precentage+= 1
        },
        consultReset:(state)=> {
            state.disease = ""
            state.nextQuestion = ""
            state.precentage = 0
        }
    }
})

export const {consultYes, consultReset} = consultSlice.actions
export default consultSlice.reducer