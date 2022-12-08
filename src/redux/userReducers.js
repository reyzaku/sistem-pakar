import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest } from "../AxiosInstances";

export const me = createAsyncThunk("user/me", async (user, thunkAPI) => {
  try {
    const { data } = await authRequest.get("/me");
    return data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    message: "",
    isLoading: false,
    isSuccess: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.message = action.payload;
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
    },
    register: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(me.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(me.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.currentUser = action.payload;
    });
    builder.addCase(me.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
