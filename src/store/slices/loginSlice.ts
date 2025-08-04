import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginState {
  loading: boolean;
  error: string | null;
  user: any | null;
}

const initialState: LoginState = {
  loading: false,
  error: null,
  user: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    payload: { usernameOrEmail: string; password: string; rememberMe: boolean },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/login", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Ошибка входа");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
