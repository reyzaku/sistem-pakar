import {createSlice} from "@reduxjs/toolkit"

const consultSlice = createSlice({
    name: "user",
    initialState: {
        question: [],
        disease: "",
        symptom: "",
        nextQuestion: "",
        totalYes: 0,
        totalNo: 0
        
    },
    reducers: {
        consultYes:(state, action)=>{
            state.disease = action.payload.disease
            state.symptom = action.payload.symptom
            state.nextQuestion = action.payload.nextQuestion
            state.totalYes++
            state.totalNo++
        },
        consultNo:(state, action)=>{
            state.disease = action.payload.disease
            state.symptom = action.payload.symptom
            state.nextQuestion = action.payload.nextQuestion
            state.totalNo++
        },
        consultReset:(state)=> {
            state.question = []
            state.disease = ""
            state.nextQuestion = ""
            state.symptom = ""
            state.totalYes = 0
            state.totalNo = 0
        },
        consultAddPrecentage:(state)=> {
            state.precentage++
        },
        consultInitiate:(state, action) => {
            state.question = action.payload
        }
    }
})

export const {consultInitiate, consultYes, consultNo, consultReset, consultAddPrecentage} = consultSlice.actions
export default consultSlice.reducer