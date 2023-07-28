import cls from "./PageDescription.module.scss"
import {Benefits} from "shared/lib/helpers/mocks/benefitsList"
import OutlinedCheckIcon from 'shared/assets/Check.svg'

export const PageDescription = () => {
    return ( 
    <div className={cls.pageDescriptionWrapper}>
    <div className={cls.titleContent}>
        <p>Войти в аккаунт</p>
    </div>
    <div className={cls.paragraphContent}>
        <p>Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы:</p>
    </div>
    <div className={cls.benefits}>
        {Benefits.map (benefit => (
            <div className={cls.benefit}>
                <OutlinedCheckIcon />
                <p>{benefit}</p>
            </div>
        ))}
    </div>
    </div> 
    );
};