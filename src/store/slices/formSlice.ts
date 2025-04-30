import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  comment: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { updateFormField, resetForm } = formSlice.actions;
export default formSlice.reducer;
