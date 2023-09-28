import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  links: localStorage.getItem("links") ? JSON.parse(localStorage.getItem("links")) : [],
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.links.push(action.payload);
      localStorage.setItem("links", JSON.stringify(state.links));
    },
    deleteLink: (state, action) => {
      const newLinks = state.links.filter(link => link.id !== action.payload);
      state.links = newLinks;
      localStorage.setItem("links", JSON.stringify(newLinks));
    },
    setLinks: (state, action) => {
      state.links = action.payload;
      localStorage.setItem("links", JSON.stringify(action.payload));
    },
    updateLink: (state, action) => {
      const {id, name, url, favicon} = action.payload;
      const link = state.links.find(link => link.id === id);
      link.name = name;
      link.url = url;
      localStorage.setItem("links", JSON.stringify(state.links));
    }
  }
});

export const linkActions = linkSlice.actions;
export default linkSlice.reducer;