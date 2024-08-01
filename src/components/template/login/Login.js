"use client"
import React, { useState } from 'react';
import style from './login.module.css'
import Input from '@/components/module/inputwrap/Input';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';
import { apiSignIn } from '../../../../api/account';
import { AUTH_TOKEN_KEY } from '../../../../common/const';
import { useRouter } from 'next/navigation';


export default function Login({ showRegisterForm }) {
    const router = useRouter()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const signinHandler = (event) => {
        event.preventDefault()

        const inputSininUser = {
            password: password,
            user_name: userName
        }

        apiSignIn(inputSininUser)
                 .then(res=>{
                    if(res.result !==null){
                        localStorage.setItem(AUTH_TOKEN_KEY,JSON.stringify(res.result))
                         router.replace('/')
                    }
                 })  
                 .catch(err => console.log(err))
               

    }





    return (
        <>
            {/* login body */}
            <div className={style.loginBody}>
                <p className={style.loginBodyTitle}>ورود به حساب کاربری</p>
                <form className={style.loginForm}>
                    <Input
                        title={'شماره موبایل یا ادرس ایمیل'}
                        placeholder={'شماره موبایل یا ادرس ایمیل خود را وارد کنید'}
                        value={userName}
                        onChange={(value) => setUserName(value)}
                    />
                    <Input
                        title={'رمز عبور'}
                        placeholder={'رمز عبور خود را وارد کنید'}
                        value={password}
                        onChange={(value) => setPassword(value)}
                    />
                    <div className={style.loginBtnWrap}>
                        <button className={style.loginBtn} onClick={signinHandler}>
                            <span>ورود به حساب کاربری</span>
                            <FiLogOut />
                        </button>
                    </div>
                </form>
                <div className={style.loginForgetPassword}>
                    <Link href={'/'} className={style.loginForgetPasswordLink}>
                        <span>رمز عبور خود را فراموش کردم!</span>
                        <FaLock />
                    </Link>
                </div>

            </div>

            <div className={style.registerPage}>
                <p className={style.registerPageTitle}>حساب کاربری ندارید؟</p>
                <button onClick={showRegisterForm} className={style.registerPageBtn}>ایجاد کنید</button>
            </div>
        </>
    );
}