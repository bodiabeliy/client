import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import UserReducer from "entities/User/services/UserSlice"
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({ 
    UserReducer
 })
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
