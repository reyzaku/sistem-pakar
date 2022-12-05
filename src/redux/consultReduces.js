import {createSlice} from "@reduxjs/toolkit"

const consultSlice = createSlice({
    name: "user",
    initialState: {
        disease: "",
        symptom: "",
        nextQuestion: "",
        precentage: 0
        
    },
    reducers: {
        consultYes:(state, action)=>{
            state.disease = action.payload.disease
            state.symptom = action.payload.symptom
            state.nextQuestion = action.payload.nextQuestion
            state.precentage++
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