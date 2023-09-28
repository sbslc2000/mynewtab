import {configureStore} from "@reduxjs/toolkit";
import memoSlice from "./memo/Memo.slice";
import linkSlice from "./memo/Link.slice";


const store = configureStore ({
  reducer: {
    "memo": memoSlice,
    "link": linkSlice
  }
})

export default store;