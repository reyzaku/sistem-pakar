import { publicRequest } from "../AxiosInstances";
import { loginFailure, loginStart, loginSuccess } from "./userReducers"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/login", user)
        dispatch(loginSuccess(res.data.data))
    }catch(res){
        dispatch(loginFailure(res));
    }
}