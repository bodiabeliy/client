import { AboutPage } from "pages/ConfirmationPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN="main",
    ABOUT ="about",
    REGISTRATION="registration",
    CONFIRMATION ="confirmation",  
    ACTIVATION="activation",
}

export const routesPath: Record<AppRoutes, string> ={
    [AppRoutes.MAIN]:"/",
    [AppRoutes.ABOUT]:"/about",
    [AppRoutes.REGISTRATION]:"/registration",
    [AppRoutes.CONFIRMATION]:"/confirmation",
    [AppRoutes.ACTIVATION]:"/activation",   
}

export const routeConfig:Record<AppRoutes, RouteProps> ={
    [AppRoutes.MAIN]:{
        path:routesPath.main,
        element:<MainPage />
    },
    [AppRoutes.ABOUT]:{
        path:routesPath.about,
        element:<AboutPage />
    },
    [AppRoutes.REGISTRATION]:{
        path:routesPath.main,
        element:<MainPage />
    },
    [AppRoutes.CONFIRMATION]:{
        path:routesPath.about,
        element:<AboutPage />
    },
    [AppRoutes.ACTIVATION]:{
        path:routesPath.main,
        element:<MainPage />
    }
}

export { RouteProps }
