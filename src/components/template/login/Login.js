import React from 'react';
import style from './login.module.css'
import Input from '@/components/module/inputwrap/Input';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';


export default function Login({showRegisterForm}) {
    return (
        <>
            {/* login body */}
            <div className={style.loginBody}>
                <p className={style.loginBodyTitle}>ورود به حساب کاربری</p>
                <form className={style.loginForm}>
                    <Input title={'شماره موبایل یا ادرس ایمیل'} placeholder={'شماره موبایل یا ادرس ایمیل خود را وارد کنید'} />
                    <Input title={'رمز عبور'} placeholder={'رمز عبور خود را وارد کنید'} />
                    <div className={style.loginBtnWrap}>
                        <button className={style.loginBtn}>
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
