import { configureStore } from "@reduxjs/toolkit";
import  Api  from "../feature/slice";

export const store = configureStore({
    reducer: {
        apiKey : Api
    }
})