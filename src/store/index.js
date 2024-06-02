import { configureStore } from "@reduxjs/toolkit";
import caseReducer from './slices/case'

const store = configureStore({
    reducer: {
        case: caseReducer,
        }
    })
    
export default store;