import {configureStore} from "@reduxjs/toolkit";
import memoSlice from "./slices/Memo.slice";
import linkSlice from "./slices/Link.slice";
import editLinkSlice from "./slices/EditLink.slice";


const store = configureStore ({
  reducer: {
    "memo": memoSlice,
    "link": linkSlice,
    "editLink": editLinkSlice,
  }
})

export default store;