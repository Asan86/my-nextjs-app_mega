import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: RegisterState = {
  loading: false,
  error: null,
  success: false,
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (
    {
      email,
      login,
      password,
    }: { email: string; login: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/register", {
        email,
        login,
        password,
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Ошибка регистрации"
      );
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetRegisterState } = registerSlice.actions;
export default registerSlice.reducer;
