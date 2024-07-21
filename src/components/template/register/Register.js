import React from 'react';
import style from './register.module.css'
import Input from '@/components/module/inputwrap/Input';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';


export default function Register({showloginForm}) {
    return (
        <>
            {/* login body */}
            <div className={style.loginBody}>
                <p className={style.loginBodyTitle}>ایجاد حساب کاربری جدید</p>
                <form className={style.loginForm}>
                    <Input title={'شماره موبایل یا ادرس ایمیل'} placeholder={'شماره موبایل یا ادرس ایمیل خود را وارد کنید'} />
                    <Input title={'رمز عبور'} placeholder={'رمز عبور خود را وارد کنید'} />
                    <Input title={'تکرار رمز عبور'} placeholder={'رمز عبور خود را تکرار کنید'} />
                    <div className={style.loginBtnWrap}>
                        <button className={style.loginBtn}>
                            <span>ورود به حساب کاربری</span>
                            <FiLogOut />
                        </button>
                    </div>
                </form>
               

            </div>

            <div className={style.registerPage}>
                <p className={style.registerPageTitle}>حساب کاربری دارید؟</p>
                <button onClick={showloginForm} className={style.registerPageBtn}>واردشوید</button>
            </div>
        </>
    );
}
