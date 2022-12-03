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
        consultNo:(state, action)=>{
            state.nextQuestion = action.payload.nextQuestion
        },
        consultDupe:(state, action)=> {
            state.nextQuestion = action.payload.nextQuestion
        }
    }
})

export const {consultYes, consultDupe} = consultSlice.actions
export default consultSlice.reducer