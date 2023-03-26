import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./dataload"
import commonState from "./common";

export default configureStore({
    reducer: {
        initdata:dataReducer,
        commonstate:commonState
    }
})