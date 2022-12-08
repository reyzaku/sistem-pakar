import {configureStore} from "@reduxjs/toolkit"
import consultReduces from "./consultReduces";
import UserReducers from "./userReducers"

export default configureStore({
    reducer:{
        consult: consultReduces,
        user: UserReducers
    }
})