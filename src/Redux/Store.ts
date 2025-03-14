import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.ts"
import todoSlice from "./slices/todoSlice.ts"

const Store = configureStore({
    reducer:{
        userReducer:userSlice,
        todoReducer:todoSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export default Store