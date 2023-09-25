import {configureStore} from "@reduxjs/toolkit";
import memoSlice from "./memo/Memo.slice";


const store = configureStore ({
  reducer: {
    "memo": memoSlice
  }
})

export default store;