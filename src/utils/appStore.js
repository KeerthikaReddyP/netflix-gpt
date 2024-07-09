import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "react";

const appStore=configureStore({
    reducer:{
        user: userReducer,
    },
});

export default appStore;