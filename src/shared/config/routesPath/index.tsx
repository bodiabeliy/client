import { AboutPage } from "pages/ConfirmationPage"
import ConfirmationPage from "pages/ConfirmationPage/ui/ConfirmationPage"
import { MainPage } from "pages/MainPage"
import { RegistrationPage } from "pages/RegistrationPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN="main",
    REGISTRATION="registration",
    CONFIRMATION ="confirmation",  
    ACTIVATION="activation",
}

export const routesPath: Record<AppRoutes, string> ={
    [AppRoutes.MAIN]:"/",
    [AppRoutes.REGISTRATION]:"/registration",
    [AppRoutes.CONFIRMATION]:"/confirmation",
    [AppRoutes.ACTIVATION]:"/activation",   
}

export const routeConfig:Record<AppRoutes, RouteProps> ={
    [AppRoutes.MAIN]:{
        path:routesPath.main,
        element:<MainPage />
    },
    [AppRoutes.REGISTRATION]:{
        path:routesPath.registration,
        element:<RegistrationPage />
    },
    [AppRoutes.CONFIRMATION]:{
        path:routesPath.confirmation,
        element:<ConfirmationPage />
    },
    [AppRoutes.ACTIVATION]:{
        path:routesPath.main,
        element:<MainPage />
    }
}

export { RouteProps }
