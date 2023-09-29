import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  editingLink: {},
  isEditing: false,
}

const editLinkSlice = createSlice({
  name: "editLink",
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      console.log(action.payload);
      state.isEditing = true;
      state.editingLink = action.payload;
    },
    closeEditModal: (state, action) => {
      state.isEditing = false;
      state.editingLink = {};
    }
  }
});

export const editLinkActions = editLinkSlice.actions;
export default editLinkSlice.reducer;
