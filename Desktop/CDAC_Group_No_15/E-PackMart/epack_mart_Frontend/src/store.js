import { configureStore } from "@reduxjs/toolkit";
import { loggedReducer, loggedSlice } from "./slice";

export default configureStore({
    reducer : {
        // logged : loggedSlice.reducer
        loggedin:false
    }
})