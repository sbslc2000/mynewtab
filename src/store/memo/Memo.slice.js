import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  memos: [],
}

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    setMemos: (state, action) => {
      state.memos = action.payload;
      localStorage.setItem("memos", JSON.stringify(action.payload));
    },
    addMemo: (state, action) => {
      state.memos.push(action.payload);
      localStorage.setItem("memos", JSON.stringify(state.memos));
    },
    deleteMemo: (state, action) => {
      const newMemos = state.memos.filter(memo => memo.id !== action.payload);
      state.memos = newMemos;
      localStorage.setItem("memos", JSON.stringify(newMemos));
    },
    moveMemoPosition: (state, action) => {
      console.log("moveMemoPosition,", action.payload);
      const {id, x, y} = action.payload;
      const memo = state.memos.find(memo => memo.id === id);

      if(memo.top + y > window.innerHeight - 200) {
        memo.top = window.innerHeight - 200;
      } else if (memo.top + y < 0) {
        memo.top = 0;
      } else {
        memo.top = memo.top + y;
      }

      if(memo.left + x > window.innerWidth - 300) {
        memo.left = window.innerWidth - 300;
      } else if (memo.left + x < 0) {
        memo.left = 0;
      } else {
        memo.left = memo.left + x;
      }

      localStorage.setItem("memos", JSON.stringify(state.memos));
    }
  }
});

export const memoActions = memoSlice.actions;
export default memoSlice.reducer;