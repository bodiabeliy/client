export interface IUser {
    email:string;
    password:string;
    isLoading:boolean
    isActivated:boolean;
    isLogin?:boolean;
    error:string,
    isAuth:Boolean
}