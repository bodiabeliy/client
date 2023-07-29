import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from "entities/User/model/slice/UserSlice"

const rootReducer = combineReducers({ 
    UserReducer
 })
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})