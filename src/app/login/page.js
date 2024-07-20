import React from 'react';
import style from '@/styles/Login.module.css'
import { FaSackDollar } from "react-icons/fa6";
import Input from '@/components/module/inputwrap/Input';
import { FiLogOut } from "react-icons/fi";
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';

export default function Login() {
  return (
    <div className={style.loginWrap}>
      {/* login topbar */}
      <div className={style.loginTopbr}>
        <h2 className={style.loginTitleWrap}>
          <FaSackDollar/>
          <span className={style.loginTitle}>خرجام</span>
        </h2>
        <p className={style.subTitle}>نرم افزار مدیریت مخارج شخصی</p>

      </div>
      {/* login body */}
      <div className={style.loginBody}>
        <p className={style.loginBodyTitle}>ورود به حساب کاربری</p>
        <form className={style.loginForm}>
          <Input title={'شماره موبایل یا ادرس ایمیل'} placeholder={'شماره موبایل یا ادرس ایمیل خود را وارد کنید'}/>
          <Input title={'رمز عبور'} placeholder={'رمز عبور خود را وارد کنید'}/>
          <div className={style.loginBtnWrap}>
            <button className={style.loginBtn}>
              <span>ورود به حساب کاربری</span>
              <FiLogOut/>
            </button>
          </div>
        </form>
        <div>
          <Link href={'/'}>
          <span>رمز عبور خود را فراموش کردم!</span>
          <FaLock/>
          </Link>
        </div>

      </div>
      
    </div>
  );
}
