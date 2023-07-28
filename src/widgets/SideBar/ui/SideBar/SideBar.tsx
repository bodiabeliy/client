import { classNames } from "shared/lib/helpers/classNames";
import cls from "./SideBar.module.scss"

export const SideBar = () => {
    return ( 
    <>
        <div className={classNames(cls.sideBar)}>
            <div className={cls.sideBarContent}></div>
        </div>
    </>
     );
}
