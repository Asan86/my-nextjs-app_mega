import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  phone: string;
  isAuthorized: boolean;
}

const initialState: AuthState = {
  phone: "",
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
  },
});

export const { setUserPhone, setIsAuthorized } = authSlice.actions;
export default authSlice.reducer;
