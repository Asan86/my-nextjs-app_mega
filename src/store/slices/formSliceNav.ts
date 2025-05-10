import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  phoneNumber: string;
  verificationCode: string;
  loginModalOpen: boolean;
}

const initialState: FormState = {
  phoneNumber: "",
  verificationCode: "",
  loginModalOpen: false,
};

const formSliceNav = createSlice({
  name: "formnav",
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    setVerificationCode(state, action: PayloadAction<string>) {
      state.verificationCode = action.payload;
    },
    openLoginModal(state) {
      state.loginModalOpen = true;
    },
    closeLoginModal(state) {
      state.loginModalOpen = false;
    },
  },
});

export const {
  setPhoneNumber,
  setVerificationCode,
  openLoginModal,
  closeLoginModal,
} = formSliceNav.actions;

export default formSliceNav.reducer;
