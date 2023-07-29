import { Button, Input } from "antd";
import { FC, useState, useCallback } from "react";
import {Modal} from "shared/ui/Modal/Modal"
import ConfirmationIcon from "shared/assets/Confirmation.svg"
import cls from "./LoginForm.module.scss"
import { classNames } from "shared/lib/helpers/classNames";

interface LoginFormProps {
    formType:string
}

export const LoginForm:FC<LoginFormProps> = ({formType}) => {
    const [isLoginModal, setIsLoginModal] = useState(false);


    const onCloseModal = useCallback(() => {
        
        setIsLoginModal((prev) => !prev);
    }, [isLoginModal]);

    return ( 
    <>
        {
        formType =="registration" ?
        <div className={classNames(cls.userNameArea)}>
            <Input
            placeholder="input password" 
            />
            <Input
                placeholder="input password"
            />
            <Input
                placeholder="input password"
            />
        </div>
        :formType =="login" ?<Button onClick={()=>onCloseModal()}>login</Button>:null}

        <Modal isOpen={isLoginModal} onClose={() =>onCloseModal()} className="registrationModal">
            <ConfirmationIcon className={cls.registrationConfirm}/>

            Аккаунт был успешно зарегистрирован.<br />
             На ваш E-Mail отправлено письмо с ссылкой для подтверждения
        </Modal>
    </> 
    );
}
 
