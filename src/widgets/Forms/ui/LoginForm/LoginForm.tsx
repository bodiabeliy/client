import { Button, Input, Form } from "antd";
import { FC, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {Modal} from "shared/ui/Modal/Modal"
import ConfirmationIcon from "shared/assets/Confirmation.svg"
import KeyIcon from "shared/assets/Key.svg"


import cls from "./LoginForm.module.scss"
import { classNames } from "shared/lib/helpers/classNames";
import { UserSelector, decrement, increment } from "entities/User/model/slice/UserSlice";

interface LoginFormProps {
    formType:string
}

export const LoginForm:FC<LoginFormProps> = ({formType}) => {
    const [form] = Form.useForm();

    const [isLoginModal, setIsLoginModal] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisibleVisible] = useState(false);
    const [passwordIsEqual, setPasswordIsEqual] = useState(false)

    const dispatch = useDispatch();
    const counter = useSelector(UserSelector)

    useEffect(() => {

    })
    const onCloseModal = useCallback(() => {
        
        setIsLoginModal((prev) => !prev);
    }, [isLoginModal]);

    return ( 
    <>
        {
        formType =="registration" ?
        <Form
            form={form}
            name="register"
            scrollToFirstError
        >
            <div className={cls.registrationFields}>
                <p>Email</p>
                <Form.Item
                    name="email"
                    rules={[
                    {
                        type: 'email',
                        message: 'x Не верный формат почты!',
                    },
                    {
                        required: true,
                        message: 'Поле email не должно быть пустым!'
                    },
                    ]}
                >
                    <Input
                            className={classNames("registrationEmail", {}, [cls.formInput])}
                            placeholder="Адресс почты" 
                        />
                </Form.Item>
                    
                <p>Придумайте пароль</p>
                
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Поле пароля не должно быть пустым!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        className={classNames("registrationPassword", {}, [cls.formInput])}
                        placeholder="Придумайте пароль"
                        suffix={<KeyIcon />}
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    />
                </Form.Item>
                   
                <p>Повторите пароль</p>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Поле пароля не должно быть пустым!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            setPasswordIsEqual(true)
                            return Promise.resolve();
                        }
                        setPasswordIsEqual(false)
                        return Promise.reject(new Error('Пароли не совпадают!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password
                        className={classNames("registrationConfirmPassword", {}, [cls.formInput])}
                        placeholder="Повторите пароль"
                        suffix={<KeyIcon />}
                        visibilityToggle={{ visible: confirmPasswordVisible, onVisibleChange: setConfirmPasswordVisibleVisible }}
                    />
                </Form.Item>
                    
                <Button
                    className={classNames("registrationButton", {}, [cls.submitButton])}
                    disabled={!passwordIsEqual}
                    >Зарегистрироватся
                </Button>
            </div>
         </Form>
        :formType =="login" ?
        
        // <Button onClick={()=>onCloseModal()}>login</Button>
        <Form
            form={form}
            name="register"
            scrollToFirstError
        >
            <div className={cls.registrationFields}>
                <p>Email</p>
                <Form.Item
                    name="email"
                    rules={[
                    {
                        type: 'email',
                        message: 'x Не верный формат почты!',
                    },
                    {
                        required: true,
                        message: 'Поле email не должно быть пустым!'
                    },
                    ]}
                >
                    <Input
                            className={classNames("registrationEmail", {}, [cls.formInput])}
                            placeholder="Адресс почты" 
                        />
                </Form.Item>
                    
                <p>Придумайте пароль</p>
                
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Поле пароля не должно быть пустым!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        className={classNames("registrationPassword", {}, [cls.formInput])}
                        placeholder="Придумайте пароль"
                        suffix={<KeyIcon />}
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    />
                </Form.Item>
 
                <Button
                    className={classNames("registrationButton", {}, [cls.submitButton])}
                    
                    >Войти
                </Button>
            </div>
         </Form>        
        :null}

        <Modal isOpen={isLoginModal} onClose={() =>onCloseModal()} className="registrationModal">
            <ConfirmationIcon className={cls.registrationConfirm}/>

            Аккаунт был успешно зарегистрирован.<br />
             На ваш E-Mail отправлено письмо с ссылкой для подтверждения
        </Modal>
    </> 
    );
}
 
