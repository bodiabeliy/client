import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../model/types/User'
import { AppDispatch, RootState } from 'app/providers/StoreProvider/store'
import axios from 'axios'

const initialState:IUser = {
    email: '',
    password: '',
    isLoading: false,
    isActivated: false,
    isLogin:false,
    error: '',
    isAuth: false,

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
        state.isAuth = true;

    },
    logout: (state) => {
      localStorage.removeItem("userToken")
      state.isLogin =false
      state.isAuth = false
    },
  },
})

export const { setUserEmail, setUserPassword, isLogin, logout } = userSlice.actions

export const UserEmailSelector = (state:RootState) => state.UserReducer.email
export const UserPasswordSelector = (state:RootState) => state.UserReducer.password
export const IsLoginUserSelector = (state:RootState) => state.UserReducer.isLogin
export const isAuthUserSelector = (state: RootState) => state.UserReducer.isAuth;


// Thunk actions
export const registerUser = (email:string, password:string) => async (dispatch: AppDispatch) => {
    const ref ="[https://ulbitv.ru/teach/control/stream/view/id/648417440]"
    try {
        const response = await axios.post("https://api.prof.world/v2.0/profile/registration", {
            email,
            password,
            ref
        })  
        
              
        dispatch(isLogin())

        localStorage.setItem("userToken", response.data.user_data.token)

    } catch (error: any) {
      console.log('file error', error);
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

export const activateUser = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("userToken")
  try {
      const response = await axios.get(`https://api.prof.world/v2.0/profile/confirmEmail/?data={"token":${token},"ref":"https://ulbitv.ru/teach/control/stream/view/id/648417440"}`, {
         
      })        
        
  } catch (error: any) {
    console.log('file error',error);
  }
};


export default userSlice.reducer