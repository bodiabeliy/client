import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../types/User'
import { AppDispatch } from 'app/providers/StoreProvider/store'
import axios from 'axios'

const initialState:IUser = {
    email: '',
    password: '',
    isLoading: false,
    isActivated: false,
    isLogin:false,
    error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action:PayloadAction<string>) => {
      state.email = action.payload
    },
    setUserPassword: (state, action:PayloadAction<string>) => {
      state.password =action.payload
    },
    isLogin: (state) => {
        state.isLogin =true
    },
  },
})

export const { setUserEmail, setUserPassword, isLogin } = userSlice.actions

export const UserEmailSelector = (state:any) => state.UserReducer.email
export const UserPasswordSelector = (state:any) => state.UserReducer.password
export const IsLoginUserSelector = (state:any) => state.UserReducer.isLogin

// Thunk actions
export const registerUser = (email:string, password:string) => async (dispatch: AppDispatch) => {
    
    try {
        const response = await axios.post("https://api.prof.world/v2.0/profile/registration", {
            email,
            password,
        })        
        dispatch(isLogin())
    } catch (error: any) {
      console.log('file error');
    }
};


export const loginUser = (email:string, password:string) => async (dispatch: AppDispatch) => {
    console.log("login to api", {email, password});
    
    try {
        const response = await axios.post("https://api.prof.world/v2.0/profile/loginUser", {
            email,
            password,
        })        
    
    } catch (error: any) {
      console.log('file error');
    }
};

export default userSlice.reducer