import { MainPage } from "pages/MainPage"
import { UserProfilePage } from "pages/UserProfilePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN="main",
    USER_PROFILE="userProfile",
    ACTIVATION="activation",
}

export const routesPath: Record<AppRoutes, string> ={
    [AppRoutes.MAIN]:"/",
    [AppRoutes.USER_PROFILE]:"/userProfile",
    [AppRoutes.ACTIVATION]:"/activation",   
}

export const routeConfig:Record<AppRoutes, RouteProps> ={
    [AppRoutes.MAIN]:{
        path:routesPath.main,
        element:<MainPage />
    },
    [AppRoutes.USER_PROFILE]:{
        path:routesPath.userProfile,
        element:<UserProfilePage />
    },
    [AppRoutes.ACTIVATION]:{
        path:routesPath.main,
        element:<MainPage />
    }
}

export { RouteProps }
