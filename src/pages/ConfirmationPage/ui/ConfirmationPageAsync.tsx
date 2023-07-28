import {lazy} from "react";

export const ConfirmationPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./ConfirmationPage')), 1500)
}))

